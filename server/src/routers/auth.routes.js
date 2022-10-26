import Router from "express";
import User from "../models/User/User.js";
import bcrypt from "bcryptjs"
import {check, validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'
import config from "../config/config.json" assert {type: 'json'};
import authMiddleware from "../middleware/auth.middleware.js";

export const authRouter = new Router()

authRouter.post('/registration',
  [
    check('email', 'Uncorrected email').isEmail(),
    check('password', 'Uncorrected password').isLength({min: 3, max: 10})
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({message: 'Error', errors})
    }

    try {
      const {email, password} = req.body
      const candidate = await User.findOne({email})

      if (candidate) {
        return res.status(400).json({message: "User already exist"})
      }

      const hashPassword = await bcrypt.hash(password, 6)
      const user = new User({email, password: hashPassword})
      await user.save()

      return res.status(200).json({message: 'User created!'})
    } catch (e) {
      console.log(e)
      res.send({message: 'Server Error'})
    }
})

authRouter.post('/login', async (req,res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (!user) {
      return res.status(404).json({message: "User not found"})
    }

    const isPassValid = bcrypt.compareSync(password, user.password)
    if (!isPassValid) {
      return res.status(400).json({message: 'Invalid password'})
    }

    const token = jwt.sign(
      {id: user.id},
      config.secretKey,
      {expiresIn: '10h'},
    )

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar
      }
    })
  } catch (e) {
    console.log(e)
    res.send({message: 'Server Error'})
  }
})

authRouter.get('/auth', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user.id})

    const token = jwt.sign(
      {id: user.id},
      config.secretKey,
      {expiresIn: '10h'}
    )

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar
      }
    })
  } catch (e) {
    console.log(e)
    res.send({message: 'Server Error'})
  }
})

export default authRouter;