import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import clsx from 'clsx';


const theme = responsiveFontSizes(Mytheme);
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    borderBottom: '1px solid #c0c0c0'
  },
  Done: {
    textDecoration: 'line-through'
  },
  NotDone: {
    textDecoration: 'none'
  },
}));

const TasksList = ({ tasks, handleDelete, handleChange }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {tasks.map(task => {
        return (
          <ListItem
            key={task.id}
            role={undefined}
            dense
            button
            className={classes.listItem}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.isDone}
                onChange={handleChange(task.id)}
                value={task.id}
              />
            </ListItemIcon>
            <ListItemText
              id={task.id}
              primary={task.bodyTask}
              className={clsx(
                classes.listItemText,
                task.isDone ? classes.Done : classes.NotDone
              )}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDelete(task.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TasksList;
