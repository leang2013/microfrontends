import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { GlobalStore } from 'redux-micro-frontend';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Badge from '@material-ui/core/Badge';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header';
import Footer from '../components/footer';
import ErrorBoundary from '../components/errorBoundary';
import { connectToStore } from '../utils';

const Tasks = React.lazy(() => import('tasks/Tasks'));

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexFrow: 1,
    display: 'flex',
  },
}));

const MainPage = () => {
  const [tasks, settasks] = useState(0);

  const getNumber = (localstate) => settasks(localstate.tasksState.tasks.results.length);

  const globalStore = GlobalStore.Get();

  useEffect(() => {
    async function asyncConnect() {
      const component = await import('tasks/Tasks');
      if (component) {
        connectToStore(globalStore, 'Tasks', getNumber);
      }
    }

    asyncConnect();
  }, []);

  const classes = useStyles();

  return (
    <>
      <Header />
      <Typography variant="h5" component="h2" align="center">
        Task Management
      </Typography>
      <div className={classes.root}>
        <FormControl>
          <Badge badgeContent={tasks} color="error">
            <FormatListBulletedIcon />
          </Badge>
        </FormControl>
      </div>
      <ErrorBoundary>
        <React.Suspense fallback="Loading Tasks">
          <Tasks />
        </React.Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MainPage;
