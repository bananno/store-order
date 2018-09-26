import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Menu from '../Menu/Menu';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Backdrop from '../UI/Backdrop/Backdrop';

const layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Toolbar />
      <Menu />
      <ShoppingCart />
      <Backdrop />
    </div>
  );
};

export default layout;

