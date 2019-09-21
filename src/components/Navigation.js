import React from 'react';
import { Drawer , List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  drawer: {
    flexShrink: 0,
    width: '250px'
  },
  drawerPaper: {
    width: '250px'
  }
};

const Navigation = ({ classes }) => (
  <Drawer 
    variant="permanent"
    className={ classes.drawer }
    classes={{
      paper: classes.drawerPaper
    }}>
    <Toolbar />
    <List>
      <ListItem>
        <ListItemText primary={ 'Test' } />
      </ListItem>
    </List>
  </Drawer>
);

export default withStyles(styles)(Navigation);