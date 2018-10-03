import React from 'react';
import classes from './Menu.css';
import itemList from '../../database/itemList.js';
import MenuCard from '../MenuCard/MenuCard';

const menu = (props) => {
  return (
    <div className={classes.Menu}>
      {itemList.map((items, i) => (
        <MenuCard name={items.name} img={items.img} itemDes={items.itemDes} key={i}/>
      ))}
    </div>
  );
};

export default menu;



