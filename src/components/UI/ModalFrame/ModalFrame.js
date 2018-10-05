import React from 'react';
import classes from './ModalFrame.css';

const modalFrame = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    // <div className={props.test ? classes.ModalFrame : classes.Frame}>
    <div className={classes.ModalFrame}>
      {props.children}
    </div>
  );
};

export default modalFrame;


// className={classes.Button + (props.quantity == 0 ? (" " + classes.ButtenWhenZero) : "")}>-</button>
