import mongoose from "mongoose";

const Task = new mongoose.Schema({
  author: {type: String, required: true},
  text: {type: String},
  isActive: {type: Boolean, required: true}
})

export default mongoose.model('Task', Task)