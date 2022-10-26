import Router from "express";
import postController from "../controllers/Post/PostController.js";

export const router = new Router()

router.post('/tasks', postController.createPost)
router.get('/tasks', postController.getAllPosts)
router.get('/tasks/:id', postController.getOnePost)
router.put('/tasks/:id', postController.changePost)
router.delete('/tasks/:id', postController.deletePost)