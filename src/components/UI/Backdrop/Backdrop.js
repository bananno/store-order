import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={classes.Backdrop}>
    </div>
  );
};

export default backdrop;
