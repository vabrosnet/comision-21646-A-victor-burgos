import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPosts, ctrlUpdatePost, ctrlPostView } from "../controllers/post.controllers.js";
import { createPostSchema, editPostSchema } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";

const postRouter = Router();

// RUTA PARA LA VISTA
postRouter.get('/posts', ctrlPostView)

// endpoint para traer todos los posts
postRouter.get('/api/posts', ctrlGetPosts)

// endpoint para crear un post
postRouter.post('/api/posts', createPostSchema, validator, ctrlCreatePost)

// endpoint para modificar un post
postRouter.put('/api/posts/:id', editPostSchema, validator, ctrlUpdatePost)

// endpoint para eliminar un post
postRouter.delete('/api/posts/:id', ctrlDeletePost)

export { postRouter }