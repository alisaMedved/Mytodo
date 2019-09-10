import React from 'react';
import AddTask from '../AddTask';
import TaskList from '../TaskList';

const TodoContainer = (props) => {
  return (
    <div>
      <h1>Todo</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodoContainer;
