import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Toolbar />
      <p>Layout!</p>
    </div>
  );
};

export default Layout;

