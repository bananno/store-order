import React from 'react';
import classes from './Toolbar.css';
import AppLogo from './AppLogo/AppLogo';
import CartInfo from './CartInfo/CartInfo';
import ShoppingCartButton from './ShoppingCartButton/ShoppingCartButton';

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <AppLogo/>
      <CartInfo title="Total Quantity" info="7 items"/>
      <CartInfo title="Total Price" info="$45.00"/>
      <ShoppingCartButton clickShoppingCartButton={props.clickShoppingCartButton}/>
    </div>
  );
};

export default toolbar;
