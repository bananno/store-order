import React from 'react';
import classes from './ModalFrame.css';

const modalFrame = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.ModalFrame}>
      {props.children}
    </div>
  );
};

export default modalFrame;
