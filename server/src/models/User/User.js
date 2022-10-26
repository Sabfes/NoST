import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  avatar: {type: String},
  files: [{type: Object, ref: 'File'}]
})

export default mongoose.model('User', User)