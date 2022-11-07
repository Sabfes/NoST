import express from 'express'
import mongoose from 'mongoose'
import {taskRoutes} from "./routers/task.routes.js"
import config from "./config/config.json" assert { type: 'json' }
import cors from "./middleware/cors.middleware.js";
import authRouter from "./routers/auth.routes.js";

const DB_URL = config.dbUrl
const PORT = config.PORT
//killall -9 node ps ax

const app = express()
app.use(cors)
app.use(express.json())
app.use('/api', taskRoutes)
app.use('/api/auth', authRouter)

// GET
app.get('/', (req, res) => {
  res.status(200).json('nice gj')
})

const startApp = async () => {
  try {
    await mongoose.connect(
      DB_URL,
      {useNewUrlParser: true}
    )
    app.listen(PORT, () => {
      console.clear();
      console.log('app init')
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()