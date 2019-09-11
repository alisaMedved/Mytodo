import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTask = ({ handleSubmit, handleChange, values }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-name"
        label="New Task"
        margin="normal"
        value={values.newTask}
        onChange={handleChange('newTask')}
      />
      <Button type="submit" variant="contained" color="primary">
        Add task
      </Button>
    </form>
  );
};

export default AddTask;
