import jwt from 'jsonwebtoken'
import config from "../config/config.json" assert {type: 'json'};

function authMiddleware (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({message: "Auth error 401"})
    }

    const decoded = jwt.verify(token, config.secretKey)
    req.user = decoded
    next()
  } catch (e) {
    console.log(e)
    return res.status(401).json({message: "Auth error 401"})
  }
}

export default authMiddleware