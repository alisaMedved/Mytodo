export const setTask = (newTask, taskId) => ({
  type: 'SET_TASK',
  newTask,
  taskId
});

export const deleteTask = taskId => ({ type: 'DELETE_TASK', taskId });
export const updateTask = (taskId, isDone) => ({ type: 'UPDATE_TASK', taskId, isDone });
