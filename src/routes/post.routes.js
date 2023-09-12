import { Router } from "express";
import { ctrlPostHome, ctrlCreatePost, ctrlDeletePost, ctrlGetPosts, ctrlUpdatePost, ctrlPostView, ctrlFoundPost } from "../controllers/post.controllers.js";
import { createPostSchema, editPostSchema } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";
import { PostModel } from "../models/posts.js";

const postRouter = Router();

// Inicio
postRouter.get('/', ctrlPostHome)

// Administración
postRouter.get('/posts', ctrlPostView)

// endpoint para traer todos los posts
postRouter.get('/api/posts', ctrlGetPosts)

// endpoint para crear un post
postRouter.post('/api/posts', createPostSchema, validator, ctrlCreatePost)

// endpoint para modificar un post
postRouter.put('/api/posts/:id', editPostSchema, validator, ctrlUpdatePost)

// endpoint para eliminar un post
postRouter.delete('/api/posts/:id', ctrlDeletePost)

// endpoint para traer un post por ID
postRouter.get('/api/posts/:id', ctrlFoundPost)

export { postRouter }