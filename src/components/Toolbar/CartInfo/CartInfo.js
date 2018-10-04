import React from 'react';
import classes from './CartInfo.css';

const cartInfo = (props) => {
  return (
    <div className={classes.CartInfo}>
      <div className={classes.TotalItems}>
        Total number of items: {props.totalItems}
      </div>
      <div className={classes.Total}>
        <p><strong>Total price ${props.total}</strong></p>
      </div>
    </div>
  );
};

export default cartInfo;
