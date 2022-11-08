import { instanceWithoutToken } from './index';

export const apiTasks = {
  getAllTasks: () => {
    return instanceWithoutToken.get('/api/tasks')
  },
  addNewTask: (data) => {
    return instanceWithoutToken.post('/api/tasks', data)
  },
  deleteTestById: (taskId) => {
    return instanceWithoutToken.delete(`/api/tasks/${taskId}`)
  }
};
