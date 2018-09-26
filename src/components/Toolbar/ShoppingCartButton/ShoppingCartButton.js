import React from 'react';
import classes from './ShoppingCartButton.css';
import shoppingCartLogo from '../../../assets/images/shopping-cart.png'

const shoppingCartButton = (props) => {
  return (
    <div className={classes.ShoppingCartButton}>
      <img src={shoppingCartLogo}/>
    </div>
  );
};

export default shoppingCartButton;
