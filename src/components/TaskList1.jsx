import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const ColorCheckbox = withStyles({
  root: {
    color: 'grey',
    '&$checked': {
      color: '#FFC600'
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  tasksListContainer: {
    width: 650
  },
  tasksListRoot: {
    marginTop: 50,
    marginBottom: 50,
    width: 550,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: theme.palette.background.paper
  },
  tasksListItem: {
    width: '100%',
    display: 'flex',
    borderBottom: '1px solid #c0c0c0',
  },
  Done: {
    textDecoration: 'line-through',
    fontSize: theme.typography.fontSize
  },
  NotDone: {
    textDecoration: 'none',
    fontSize: theme.typography.fontSize
  },
  ButtonIcon: {
    fontSize: theme.typography.ButtonIcon.fontSize
  }
}));

const TasksList = ({ tasks, handleDelete, handleChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.tasksListContainer}>
      <List className={classes.tasksListRoot}>
        {tasks.map(task => {
          return (
            <ListItem
              key={task.id}
              role={undefined}
              dense
              button
              className={classes.tasksListItem}
            >
              <FormControlLabel
                control={
                  <ColorCheckbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="default" className={classes.ButtonIcon}/>}
                    checkedIcon={<CheckBoxIcon fontSize="default" className={classes.ButtonIcon}/>}
                    checked={task.isDone}
                    onChange={handleChange(task.id)}
                    value={task.id}
                  />
                }
              />
              <ListItemText
                id={task.id}
                primary={task.bodyTask}
                className={clsx(
                  classes.listItemText,
                  task.isDone ? classes.Done : classes.NotDone
                )}
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => handleDelete(task.id)}
                >
                  <DeleteIcon
                    className={classes.ButtonIcon}
                    fontSize="default"
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};


export default TasksList;

