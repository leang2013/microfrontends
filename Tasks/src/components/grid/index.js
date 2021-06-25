/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';

const Grid = ({ tasks, deleteTask }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Task</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks && tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell align="center">
                #
                { task.id}
              </TableCell>
              <TableCell align="center">
                { task.task || 'fake-data' }
              </TableCell>
              <TableCell align="center">
                <Chip label={task.state || 'new' } color="secondary" />
              </TableCell>
              <TableCell align="center">
                <Chip label={task.priority || 'high'} />
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => console.log('testig')}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
Grid.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Grid;
