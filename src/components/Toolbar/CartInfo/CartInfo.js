import React from 'react';
import classes from './CartInfo.css';

const cartInfo = (props) => {
  return (
    <div className={classes.CartInfo}>
      <div className={classes.title}>
        {props.title}
      </div>
      <div className={classes.info}>
        {props.info}
      </div>
    </div>
  );
};

export default cartInfo;
