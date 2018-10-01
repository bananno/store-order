import React from 'react';
import classes from './ShoppingCartButton.css';
import shoppingCartLogo from '../../../assets/images/shopping-cart.png'

const shoppingCartButton = (props) => {
  return (
    <div className={classes.ShoppingCartButton}
        onClick={props.clickShoppingCartButton}>
      <img src={shoppingCartLogo} alt="Shopping Cart"/>
    </div>
  );
};

export default shoppingCartButton;
