import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setTask } from '../redux/actions';
import { connect } from 'react-redux';

const AddTask = props => {
  let uuidv4 = require('uuid/v4');
  const [values, setValues] = React.useState({
    newTask: ''
  });

  const handleChange = newTask => event => {
    setValues({ ...values, [newTask]: event.target.value });
  };

  const handleSubmit = event => {
    props.setTask(values.newTask, uuidv4());
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        margin="normal"
        value={values.newTask}
        onChange={handleChange('newTask')}
        placeholder={'new task'}
      />
      <Button type="submit" variant="contained" color="primary">
        Add task
      </Button>
    </form>
  );
};

export default connect(
  null,
  {
    setTask
  }
)(AddTask);
