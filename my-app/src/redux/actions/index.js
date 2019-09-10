export const setTask = (newTask, taskId) => ({
  type: 'SET_TASK',
  newTask,
  taskId
});

export const deleteTask = taskId => ({ type: 'DELETE_TASK', taskId });
