import React from 'react';
import classes from './ShoppingCart.css';
import itemList from '../../database/itemList.js';

const shoppingCart = (props) => {
  return (
    <div className={classes.ShoppingCart}>
      <p>ShoppingCart</p>
      <p>(button) X</p>
      <p>(insert MenuCards)</p>
      <p>(button) Checkout Now</p>
      <p>(button) Close</p>
    </div>
  );
};

export default shoppingCart;
