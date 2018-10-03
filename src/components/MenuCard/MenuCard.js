import React from 'react';
import classes from './MenuCard.css';

const menuCard = (props) => {

  const increaseItemQuantity = () => {
    props.increaseQuantity(props.name);
  }

  const decreaseItemQuantity = () => {
    props.decreaseQuantity(props.name);
  }

  let shoppingCardButtons =
    <div>
      <button onClick={decreaseItemQuantity} className={classes.Button}>-</button>
      <strong>{props.quantity}</strong>
      <button onClick={increaseItemQuantity} className={classes.Button}>+</button>
      <button className={classes.XButton}>X</button>
    </div>

  let menuButtons =
    <div>
      <input type="text"/>
      <button>Add to cart</button>
    </div>

  return (
    <div className={classes.MenuCard}>
      {props.shoppingCard ? shoppingCardButtons : menuButtons}
      <p><strong>{props.name}</strong></p>
      <img src={props.img}/>
    </div>
  );
};

export default menuCard;
