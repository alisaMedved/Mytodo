import React from 'react';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import { connect } from 'react-redux';
import {addTask, deleteTask, updateTask} from '../../redux/actions';
let uuidv4 = require('uuid/v4');


const TodoContainer = props => {

  const [values, setValues] = React.useState({
    newTask: ''
  });

  const handleInputTask = newTask => event => {
    setValues({ ...values, [newTask]: event.target.value });
  };

  const handleAddTask = event => {
    props.addTask(values.newTask, uuidv4());
    event.preventDefault();
  };

  const handleDeleteTask = taskId => {
    props.deleteTask(taskId);
  };

  const IsDoneTask = name => event => {
    props.updateTask(name, event.target.checked);
  };

  return (
    <div>
      <h1>Todo</h1>
      <AddTask
        handleSubmit={handleAddTask}
        handleChange={handleInputTask}
        values={values}
      />
      <TaskList
        handleDelete={handleDeleteTask}
        handleChange={IsDoneTask}
        tasks={props.tasks}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.addTask.tasks
  };
};

export default connect(
  mapStateToProps,
  { addTask, deleteTask, updateTask }
)(TodoContainer);
