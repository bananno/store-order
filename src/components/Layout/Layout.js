import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Menu from '../Menu/Menu';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ModalFrame from '../UI/ModalFrame/ModalFrame';
import Backdrop from '../UI/Backdrop/Backdrop';
import itemList from '../../database/itemList.js';

class Layout extends Component {

  state = {
    showShoppingCart: false,
    items: initializeItemsToState()
  }

  openShoppingCart = () => {
    this.setState({
      showShoppingCart: true
    });
  }

  render() {
    return(
      <div className={classes.Layout}>
        <Toolbar clickShoppingCartButton={this.openShoppingCart}/>
      <Menu />
        <ModalFrame show={this.state.showShoppingCart}>
          <ShoppingCart/>
        </ModalFrame>
        <Backdrop show={this.state.showShoppingCart}/>
    </div>
    )
  }
}

function initializeItemsToState() {
  let items = {};
  for ( let i = 0; i < itemList.length; i++ ) {
    items[itemList[i].name] = -1;
  }
  return items;
}

export default Layout;



