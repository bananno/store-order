import React from 'react';
import classes from './MenuCard.css';

const menuCard = (props) => {
  return (
    <div className={classes.MenuCard}>
      <p><strong>{props.name}</strong></p>
      <img src={props.img} className={classes.Img}/>
    </div>
  );
};

export default menuCard;
