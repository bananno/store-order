import React from 'react';
import classes from './Toolbar.css';
import AppLogo from './AppLogo/AppLogo';
import ShoppingCartButton from './ShoppingCartButton/ShoppingCartButton';

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <AppLogo/>
      <p>TOTAL QUANTITY</p>
      <p>TOTAL PRICE</p>
      <ShoppingCartButton/>
    </div>
  );
};

export default toolbar;
