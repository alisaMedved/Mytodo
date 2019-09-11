import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTask, updateTask } from '../redux/actions';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const handleDelete = taskId => {
    deleteTask(taskId);
  };

  const handleChange = name => event => {
    updateTask(name, event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup>
          {tasks.map((t, i) => (
            <div key={i}>
              <FormControlLabel
                key={i}
                control={
                  <Checkbox
                    checked={t.isDone}
                    onChange={handleChange(t.id)}
                    value={t.id}
                  />
                }
                label={t.bodyTask}
              />
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(t.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          ))}
        </FormGroup>
      </FormControl>
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
  { deleteTask, updateTask }
)(TaskList);
