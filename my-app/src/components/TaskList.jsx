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

  const [state, setState] = React.useState({
    gilad: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad } = state;

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
                    checked={gilad}
                    onChange={handleChange('gilad')}
                    value="gilad"
                  />
                }
                label={t.bodyTask}
              />
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(t.id)}
              >
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
