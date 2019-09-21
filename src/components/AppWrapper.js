import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  appWrapper: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: '1rem 2rem'
  }
};

const AppWrapper = ({ children, classes }) => (
  <div className={`appWrapper ${classes.appWrapper}`}>
    <Header />
    <Navigation />
    <main className={classes.content}>
      <Toolbar />
      { children }
    </main>
  </div>
);

export default withStyles(styles)(AppWrapper);