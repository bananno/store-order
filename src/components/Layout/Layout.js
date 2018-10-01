import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Menu from '../Menu/Menu';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Backdrop from '../UI/Backdrop/Backdrop';

class Layout extends Component {
  render() {
    return(
      <div className={classes.Layout}>
      <Toolbar />
      <Menu />
      <ShoppingCart />
      <Backdrop />
    </div>
    )
  }
}

export default Layout;

