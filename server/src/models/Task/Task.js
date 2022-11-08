import mongoose from "mongoose";

const Task = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  isActive: {type: Boolean, required: true},
  content: {type: String, required: true}
})

export default mongoose.model('Task', Task)