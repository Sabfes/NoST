import Router from "express";
import postController from "../controllers/Task/TaskController.js";

export const taskRoutes = new Router()
//routes
taskRoutes.post('/tasks', postController.createTask)
taskRoutes.get('/tasks', postController.getAllTasks)
taskRoutes.get('/tasks/:id', postController.getOneTask)
taskRoutes.put('/tasks/:id', postController.changeTask)
taskRoutes.delete('/tasks/:id', postController.deleteTask)