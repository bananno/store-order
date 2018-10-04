import React from 'react';
import classes from './MenuCard.css';

const menuCard = (props) => {
  if (props.shoppingCart === true && props.quantity < 0) {
    return null;
  }

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

  const remove = () => {
    props.removeItemFromShoppingCart(props.name);
  }


  let shoppingCartButtons =
    <div>
      <button onClick={decreaseItemQuantity}
        className={classes.Button} disabled={props.quantity === 0}>-</button>
      <strong>{props.quantity}</strong>
      <button onClick={increaseItemQuantity}
        className={classes.Button}>+</button>
      <button
        className={classes.XButton}
        onClick={remove}>X</button>
        <p><strong>Total: ${props.price * props.quantity}</strong></p>
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
        <p>$<strong>{props.price}</strong></p>
        <img src={props.img} alt=""/>
      </div>

      <div className={classes.ConTainer2}>
        {props.shoppingCart ? shoppingCartButtons : menuButtons}
        <p>{props.itemDes}</p>
      </div>
    </div>
  );
};

export default menuCard;
