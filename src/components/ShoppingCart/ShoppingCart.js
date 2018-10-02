import React from 'react';
import classes from './ShoppingCart.css';
import itemList from '../../database/itemList.js';
import MenuCard from '../MenuCard/MenuCard';

const shoppingCart = (props) => {
  return (
    <div className={classes.ShoppingCart}>
      <div className={classes.TopBar}>
        Shopping Cart
        <button className={classes.XButton}>X</button>
      </div>

      <div className={classes.MainSection}>
        {itemList.map((items, i) => (
          <MenuCard name={items.name} img={items.img} key={i}/>
        ))}

        <div className={classes.BottomBar}>
          <button className={classes.CheckoutButton}>Checkout</button>
          <button className={classes.CloseButton}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default shoppingCart;
