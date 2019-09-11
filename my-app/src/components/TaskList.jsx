import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TaskList = ({ tasks, handleDelete, handleChange }) => {
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

export default TaskList;
