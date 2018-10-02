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
    </div>

  let menuButtons =
    <div>
      <p>MENU BUTTONS</p>
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
