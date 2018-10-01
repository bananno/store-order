import React from 'react';
import classes from './ShoppingCart.css';
import itemList from '../../database/itemList.js';
import MenuCard from '../MenuCard/MenuCard';

const shoppingCart = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.ShoppingCart}>
      <p>ShoppingCart</p>
      <p>(button) X</p>

      {itemList.map((items, i) => (
        <MenuCard name={items.name} img={items.img} key={i}/>
      ))}

      <p>(button) Checkout Now</p>
      <p>(button) Close</p>
    </div>
  );
};

export default shoppingCart;
