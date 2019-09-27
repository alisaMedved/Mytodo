import React from 'react';
import AddTask from '../AddTask';
import TasksList from '../TasksList';
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../../redux/actions';
import styles from './TodoContainer.module.css';
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
    setValues({ newTask: '' });
    event.preventDefault();
  };

  const handleDeleteTask = taskId => {
    props.deleteTask(taskId);
  };

  const IsDoneTask = name => event => {
    props.updateTask(name, event.target.checked);
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1>Todo list</h1>
        <AddTask
          handleSubmit={handleAddTask}
          handleChange={handleInputTask}
          values={values}
        />
        <TasksList
          handleDelete={handleDeleteTask}
          handleChange={IsDoneTask}
          tasks={props.tasks}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
};

export default connect(
  mapStateToProps,
  { addTask, deleteTask, updateTask }
)(TodoContainer);
