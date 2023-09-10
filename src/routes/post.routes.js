import { Router } from "express";

import { PostModel } from "../models/posts.js";

const postRouter = Router();

// RUTA PARA LA VISTA
//postRouter.get('/posts', ctrlView)

export { postRouter }