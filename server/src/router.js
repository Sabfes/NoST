import Router from "express";
import postController from "./PostController.js";

export const router = new Router()

router.post('/posts', postController.createPost)
router.get('/posts', postController.getAllPosts)
router.get('/posts/:id', postController.getOnePost)
router.put('/posts/:id', postController.changePost)
router.delete('/posts/:id', postController.deletePost)