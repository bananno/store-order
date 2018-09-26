import React from 'react';
import classes from './MenuCard.css';

const menuCard = (props) => {
  return (
    <div className={classes.MenuCard}>
      <p><strong>{props.name}</strong></p>
    </div>
  );
};

export default menuCard;
