import React from 'react';
import classes from './ShoppingCart.css';
import itemList from '../../database/itemList.js';
import MenuCard from '../MenuCard/MenuCard';

const shoppingCart = (props) => {
  return (
    <div className={classes.ShoppingCart}>
      <div className={classes.TopBar}>
        Shopping Cart
        <button onClick={props.closeShoppingCart} className={classes.XButton}>X</button>
      </div>

      <div className={classes.MainSection}>
        {itemList.map((items, i) => (
          <MenuCard
            name={items.name}
            img={items.img}
            itemDes={items.itemDes}
            key={i}
            quantity={props.itemState[items.name]}
            shoppingCard={true}
            increaseQuantity={props.increaseQuantity}
            decreaseQuantity={props.decreaseQuantity}/>
        ))}

        <div className={classes.BottomBar}>
          <button className={classes.CheckoutButton}>Checkout</button>
          <button onClick={props.closeShoppingCart} className={classes.CloseButton}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default shoppingCart;
