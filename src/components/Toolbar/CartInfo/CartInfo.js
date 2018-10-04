import React from 'react';
import classes from './CartInfo.css';

const cartInfo = (props) => {
  return (
    <div className={classes.CartInfo}>
      <div className={classes.Total}>
        <p><strong>Total price ${props.total}</strong></p>
      </div>
      <div className={classes.TotalItems}>
        Items added: {props.totalItems}
      </div>
    </div>
  );
};

export default cartInfo;
