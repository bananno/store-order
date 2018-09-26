import React from 'react';
import classes from './Toolbar.css';
import ShoppingCartButton from './ShoppingCartButton/ShoppingCartButton';

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <p>LOGO</p>
      <p>TOTAL QUANTITY</p>
      <p>TOTAL PRICE</p>
      <ShoppingCartButton/>
    </div>
  );
};

export default toolbar;
