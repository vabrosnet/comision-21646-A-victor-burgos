import { PostModel } from "../models/posts.js"

export const ctrlPostView = async (req, res) => {
    try {
        const posts = await PostModel.findAll();
        res.render('post.ejs', {posts})

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para traer los posts
export const ctrlGetPosts = async (req, res) => {
    try {
        const post = await PostModel.findAll();
        if (!post) return res.status(404)
        return res.status(200).json(post)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para crear un post
export const ctrlCreatePost = async (req, res) => {
    try {
        const newPost = await PostModel.create(req.body)
        return res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para actualizar un post
export const ctrlUpdatePost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findByPk(id)

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }

        post.update(req.body)

        return res.status(200).json(post)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para eliminar un post
export const ctrlDeletePost = async (req, res) => {
    const { id } = req.params
    try {
        const postDelete = await PostModel.destroy({
            where: {
                id: id
            }
        })
        if (!postDelete) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }
        return res.status(200).json({
            message: 'Post deleted'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

export const ctrlFoundPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findByPk(id)

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }

        return res.status(200).json(post)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}
