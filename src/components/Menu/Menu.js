import React from 'react';
import classes from './Menu.css';
import itemList from '../../database/itemList.js';
import MenuCard from '../MenuCard/MenuCard';

const menu = (props) => {
  return (
    <div className={classes.Menu}>
      <p>Menu!</p>
      {itemList.map((items, i) => (
        <MenuCard name={items.name} img={items.img} key={i}/>
      ))}
    </div>
  );
};

export default menu;



