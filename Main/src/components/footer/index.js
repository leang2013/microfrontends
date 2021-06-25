import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
  toolbar: {
    minHeight: 1,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 8,
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#F58320' }} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title}>
            @ 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
