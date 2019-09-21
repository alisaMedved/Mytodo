import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const AddTask = ({ handleSubmit, handleChange, values }) => {
  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={classes.textField}
        id="standard-name"
        label="New Task"
        margin="normal"
        value={values.newTask}
        onChange={handleChange('newTask')}
      />
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.margin}
        type="submit"
        size="small"
      >
        <AddIcon />
      </Fab>
    </form>
  );
};

export default AddTask;

{
  /*<Button type="submit" variant="contained" color="primary">*/
}
{
  /*    Add task*/
}
{
  /*</Button>*/
}
