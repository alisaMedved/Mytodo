import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTask } from '../redux/actions';

const TaskList = ({ tasks, deleteTask }) => {
  const handleDelete = taskId => {
    deleteTask(taskId);
  };

  return (
    <div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t.bodyTask}
            <IconButton aria-label="delete" onClick={() => handleDelete(t.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </li>
        ))}
      </ul>
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
  { deleteTask }
)(TaskList);
