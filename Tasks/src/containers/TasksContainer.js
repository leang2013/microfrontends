import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '../components/grid';
import { deleteTask, initialTasks } from '../store/actions/index';
// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

const TasksContainer = ({tasks, onDeleteTask, onLoadTasks}) => {
  const useStyles = makeStyles(() => ({
    textField: {
      verticalAlign: 'bottom',
      maxWidth: '100xp',
    },
    margin: {
      marginRight: 5,
    },
    alignItems: {
      alignItems: 'flex-end',
    },
  }));

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {  
    onLoadTasks();
  }, []);

  return (
    <div>
      <div className="tab-container">
        <FormGroup className={classes.alignItems} row>
          <TextField className={classes.textField} id="search" label="Task" color="secondary" />
          <Button className={classes.margin} variant="contained" color="primary" size="small">
            Search
          </Button>
          <Link to="/createTask">
            <Button variant="contained" color="primary" size="small">
              Create Task
            </Button>
          </Link>
          <div className="show-all">
            <FormControlLabel
              control={(
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
        )}
              label="Show All"
            />
          </div>
        </FormGroup>
      </div>
      <Grid tasks={tasks} deleteTask={onDeleteTask} />
    </div>
  );
};

const mapStateProps = (state) => ({
  tasks: state.tasksState.tasks,
});

const mapDispatchProps = (dispatch) => ({
  onDeleteTask: (id) => dispatch(deleteTask(id)),
  onLoadTasks:() => dispatch(initialTasks()),
});

TasksContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onLoadTasks: PropTypes.func.isRequired,
};

export default connect(mapStateProps,mapDispatchProps)(TasksContainer);
