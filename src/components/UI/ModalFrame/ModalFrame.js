import React from 'react';
import classes from './ModalFrame.css';

const modalFrame = (props) => {
  return (
    <div className={classes.ModalFrame}>
      {props.children}
    </div>
  );
};

export default modalFrame;
