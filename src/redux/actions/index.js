export const addTask = (newTask, taskId) => ({
  type: 'ADD_TASK',
  newTask,
  taskId
});

export const deleteTask = taskId => ({ type: 'DELETE_TASK', taskId });
export const updateTask = (taskId, isDone) => ({ type: 'UPDATE_TASK', taskId, isDone });
