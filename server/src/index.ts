import express from 'express'
import mongoose from 'mongoose'
import {postRouter} from "./routers/PostRouter"
import cors from "./middleware/cors.middleware";

const DB_URL = 'mongodb+srv://user:user@cluster0.sfq7ugr.mongodb.net/?retryWrites=true&w=majority'
const PORT = 8000
const app = express()
app.use(cors)
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json(`Server started on ${PORT}`)
})

app.use('/api', postRouter)

const startApp = async () => {
  try {
    // await mongoose.connect(
    //   DB_URL,
    //   { useUnifiedTopology: true, useNewUrlParser: true }
    // )
    app.listen(PORT, () => {
      console.log('app init')
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()