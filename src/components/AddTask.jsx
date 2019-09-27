import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  addTaskContainer: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  addTaskForm: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  addTaskFormControl: {
    width: 200,
    marginRight: 20
  },
  inputLabelAdd: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: theme.typography.inputLabelAdd.fontSize
  },
  inputAdd: {
    fontSize: theme.typography.fontSize
  },
  addTaskBut: {
    fontSize: 10,
    width: 50,
    height: 20,
    marginTop: 'auto',
    padding: '0 5px'
  }
}));

const AddTask = ({ handleSubmit, handleChange, values }) => {
  const classes = useStyles();
  return (
    <div className={classes.addTaskContainer}>
      <form
        onSubmit={handleSubmit}
        className={classes.addTaskForm}
        noValidate
        autoComplete="off"
      >
        <FormControl className={classes.addTaskFormControl}>
          <InputLabel htmlFor="addTaskInput" className={classes.inputLabelAdd}>
            New Task
          </InputLabel>
          <Input
            id="addTaskInput"
            value={values.newTask}
            className={classes.inputAdd}
            onChange={handleChange('newTask')}
          />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.addTaskBut} type="submit">
          Add task
        </Button>
      </form>
    </div>
  );
};

export default AddTask;


