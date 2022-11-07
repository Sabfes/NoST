import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiTasks} from "../../api/tasks.api";

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async () => {
    const res = await apiTasks.getAllTasks()

    if (res.status === 200) {
      return res.data
    }
  }
)

export const addNewTask = createAsyncThunk(
  'tasks/addNew',
  async (data) => {
    const res = await apiTasks.addNewTask(data)

    if (res.status === 200) {
      return res.data
    }
  }
)

export const deleteTaskById = createAsyncThunk(
  'tasks/deleteById',
  async (taskId) => {
    const res = await apiTasks.deleteTestById(taskId)

    if (res.status === 200) {
      return taskId
    }
  }
)