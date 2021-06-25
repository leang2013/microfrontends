import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createTask } from '../store/actions';

const CreateTaskContainer = ({ onCreateTask }) => {
  const [typeTask, setTypeTask] = useState('');
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setTypeTask(event.target.value);
  };

  const onChangeInput = (event) => {
    setName(event.target.value)
  }

  const useStyles = makeStyles(() => ({
    root: {
      verticalAlign: 'bottom',
    },
    margin: {
      marginRight: 5,
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const onSumbit = (task) => {
    onCreateTask(task);
  }
  
  const task = {
    name
  }

  return (
    <div>
      <Typography variant="h4">Create task</Typography>
      <form>
        <div className="create-task-container">
          <FormControl>
            <InputLabel htmlFor="my-input">Task</InputLabel>
            <Input id="my-input" onChange={onChangeInput} aria-describedby="my-helper-text" value={name} />
            <FormHelperText id="my-helper-text">your task.</FormHelperText>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel id="type-task">Type</InputLabel>
            <Select
              labelId="type-task"
              id="type-task"
              value={typeTask}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Type 1</MenuItem>
              <MenuItem value={20}>Type 2</MenuItem>
              <MenuItem value={30}>Type 3</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">your email.</FormHelperText>
          </FormControl>
        </div>
        <Link to="/">
          <Button className={classes.margin} variant="contained" color="primary" size="small">
            Cancel
          </Button>
        </Link>
        <Button variant="contained" color="primary" size="small" onClick={() => onSumbit(task)}>
          Submit
        </Button>
      </form>
    </div>
  );
};


const mapDispatchProps = (dispatch) => ({
  onCreateTask:(task) => dispatch(createTask(task)),
});

CreateTaskContainer.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};

export default connect(null,mapDispatchProps)(CreateTaskContainer);
