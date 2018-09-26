import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Menu from '../Menu/Menu';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Toolbar />
      <Menu />
      <p>Layout!</p>
    </div>
  );
};

export default Layout;

