import { createSlice } from '@reduxjs/toolkit';
import {addNewTask, getAllTasks} from "../actions/tasks.actions";

const initialState = {
  tasksList: []
};

export const TasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.tasksList = action.payload
    });
    builder.addCase(addNewTask.fulfilled, (state, action) => {
      state.tasksList = [...state.tasksList, action.payload]
    })
  },
  reducers: {
  }
});

export default TasksSlice.reducer;
// export const {
// } = TasksSlice.actions;
