 import Task from "../../models/Task/Task.js";

class TaskController {
  // Создание новой Task
  async createTask(req, res) {
    try {
      const post = await Task.create({
        title: req.body.title,
        content: req.body.content,
        isActive: req.body.isActive,
        author: req.body.author,
      })
      res.status(200).json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Получение списка всех Tasks
  async getAllTasks(req, res) {
    try {
      const posts = await Task.find()
      res.status(200).json(posts)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Получение одного Task по id
  async getOneTask(req, res) {
    try {
      if (req.params.id) {
        const post = Task.find(req.params.id)
        res.status(200).json(post)
      } else {
        res.status(400).json('Пост не найден или id не указан')
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Изменение, апдейт Task
  async changeTask(req, res) {
    try {
      const post = req.body
      if (post.id) {
        res.status(400).json('Id не указан')
      }
      const updatedPost = Task.findByIdAndUpdate(post.id, post, {new: true})
      res.status(200).json(updatedPost)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  // Удаление Task
  async deleteTask(req, res) {
    try {
      if (!req.params.id) {
        res.status(400).json('Id не указан')
      } else {
        const postId = req.params.id
        const deletedTask = await Task.findByIdAndDelete(postId)
        res.status(200).json(deletedTask)
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
export default new TaskController()