import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  appBar: {
    zIndex: '1201'
  }
};

const Header = ({ classes }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" noWrap>
            Clipped drawer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);