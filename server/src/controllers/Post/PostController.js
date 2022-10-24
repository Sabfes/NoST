import Post from "../../models/Post/Post.js";

class PostController {
  // Создание нового поста
  async createPost(req, res) {
    try {
      const post = await Post.create({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
      })
      res.status(200).json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Получение списка всех постов
  async getAllPosts(req, res) {
    try {
      const posts = await Post.find()
      console.log(posts)
      res.status(200).json(posts)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Получение одного поста по id
  async getOnePost(req, res) {
    try {
      if (req.params.id) {
        const post = Post.find(req.params.id)
        res.status(200).json(post)
      } else {
        res.status(400).json('Пост не найден или id не указан')
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Изменение, апдейт поста
  async changePost(req, res) {
    try {
      const post = req.body
      if (post.id) {
        res.status(400).json('Id не указан')
      }
      const updatedPost = Post.findByIdAndUpdate(post.id, post, {new: true})
      res.status(200).json(updatedPost)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Удаление поста
  async deletePost(req, res) {
    try {
      if (!req.body.id) {
        res.status(400).json('Id не указан')
      } else {
        const postId = req.body.id
        const deletedPost = Post.findByIdAndDelete(postId)
        res.status(200).json(deletedPost)
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
export default new PostController()