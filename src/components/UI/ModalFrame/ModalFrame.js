import React from 'react';
import classes from './ModalFrame.css';

const modalFrame = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.ModalFrame} onClick={props.click}>
      {props.children}
    </div>
  );
};

export default modalFrame;
