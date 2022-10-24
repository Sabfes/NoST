import {IRouter} from "express";
import express from "express";
import postController from "../controllers/Post/PostController.js";

export const postRouter:IRouter  = express.Router();

postRouter.post('/posts', postController.createPost)
postRouter.get('/posts', postController.getAllPosts)
postRouter.get('/posts/:id', postController.getOnePost)
postRouter.put('/posts/:id', postController.changePost)
postRouter.delete('/posts/:id', postController.deletePost)
