import React from 'react';
import classes from './MenuCard.css';

const menuCard = (props) => {

  const increaseItemQuantity = () => {
    props.increaseQuantity(props.name);
  }

  const decreaseItemQuantity = () => {
    props.decreaseQuantity(props.name);
  }

  const changeItemQuantity = (event) => {
    props.changeMenuQuantity(props.name, event.target.value);
  }

  const addToCart = () => {
    props.addItemToCart(props.name);
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
      How many:
      <input
        type="number"
        value={props.quantity}
        className={classes.Input}
        onChange={changeItemQuantity}/>
      <button onClick={addToCart}>Add to cart</button>
    </div>

  return (
    <div className={classes.MenuCard}>
      <div className={classes.ConTainer1}>
        <p><strong>{props.name}</strong></p>
        <img src={props.img}/>
      </div>

      <div className={classes.ConTainer2}>
        {props.shoppingCard ? shoppingCardButtons : menuButtons}
        <p>{props.itemDes}</p>
      </div>
    </div>
  );
};

export default menuCard;
