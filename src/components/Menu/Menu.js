import React from 'react';
import classes from './Menu.css';
import itemList from '../../database/itemList.js';
import MenuCard from '../MenuCard/MenuCard';

const menu = (props) => {
  return (
    <div className={classes.Menu}>
      {itemList.map((item, i) => (
        <MenuCard
          name={item.name}
          img={item.img}
          itemDes={item.itemDes}
          key={i}
          quantity={props.itemState[item.name]}
          changeMenuQuantity={props.changeMenuQuantity}
          addItemToCart={props.addItemToCart}/>
      ))}
    </div>
  );
};

export default menu;



