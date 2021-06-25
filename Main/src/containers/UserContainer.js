import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const state = {
  username: 'lea2021',
  firstName: 'Leandro',
  lastName: 'Martinez',
  age: '23',
};

const UserContainer = () => (
  <>
    <Typography variant="h4">Edit User</Typography>
    <form>

      <TextField type="text" placeholder="username" fullWidth margin="normal" name="username" readonly="true" value={state.username} />

      <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={state.firstName} />

      <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={state.lastName} />

      <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={state.age} />

      <Link to="/">
        <Button variant="contained" color="primary" size="small">
          Cancel
        </Button>
      </Link>
      <Button variant="contained" color="primary" size="small">Save</Button>

    </form>
  </>
);

export default UserContainer;
