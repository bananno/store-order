import React from 'react';
import classes from './MenuCard.css';

const menuCard = (props) => {

  let shoppingCardButtons =
    <div>
      <button className={classes.Button}>+</button>
      <strong>{props.quantity}</strong>
      <button className={classes.Button}>-</button>
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
