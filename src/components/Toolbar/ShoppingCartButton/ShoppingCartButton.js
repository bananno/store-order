import React from 'react';
import classes from './ShoppingCartButton.css';
import shoppingCartLogo from '../../../assets/images/shopping-cart.png'

const ShoppingCartButton = (props) => {
  return (
    <div className={classes.ShoppingCartButton}>
      <img src={shoppingCartLogo}/>
      Shopping Cart
    </div>
  );
};

export default ShoppingCartButton;
