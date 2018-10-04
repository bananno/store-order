import React from 'react';
import classes from './Toolbar.css';
import AppLogo from './AppLogo/AppLogo';
import CartInfo from './CartInfo/CartInfo';
import ShoppingCartButton from './ShoppingCartButton/ShoppingCartButton';

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <AppLogo/>
      <CartInfo total={props.total} totalItems={props.totalItems}/>
      <ShoppingCartButton clickShoppingCartButton={props.clickShoppingCartButton}/>
    </div>
  );
};

export default toolbar;
