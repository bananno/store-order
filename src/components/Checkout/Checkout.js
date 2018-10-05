import React from 'react';
import classes from './Checkout.css';
import itemList from '../../database/itemList.js';

const checkout = (props) => {
  return (
    <div className={classes.Frame}>
      <h1>Summary of order</h1>
      {itemList.map((item, i) => {
        return props.itemState[item.name] > 0 ?
          <div className={classes.Test} key={i}>
            <p>
              Item: <strong>{item.name}</strong>&#160;
              Price per item: <strong>${item.price}</strong>&#160;
              Total number of items: <strong>{props.itemState[item.name]}</strong>&#160;
              Total: <strong>${item.price * props.itemState[item.name]}</strong>
            </p>
        </div>
         : null;
      })}

      <h4>Total: ${props.total}</h4>
    </div>
  );
}

export default checkout;

