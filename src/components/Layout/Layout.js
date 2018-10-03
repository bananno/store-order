import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import Menu from '../Menu/Menu';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ModalFrame from '../UI/ModalFrame/ModalFrame';
import itemList from '../../database/itemList.js';

class Layout extends Component {

  state = {
    showShoppingCart: false,
    items: initializeItemsToState(-1),
    menuItems: initializeItemsToState(1)
  }

  openShoppingCart = () => {
    this.setState({
      showShoppingCart: true
    });
  }

  closeShoppingCart = () => {
    this.setState({
      showShoppingCart: false
    });
  }

  increaseQuantity = (itemName) => {
    const updatedItems = {
      ...this.state.items
    };

    updatedItems[itemName] = this.state.items[itemName] + 1;

    this.setState({
      items: updatedItems
    });
  }

  decreaseQuantity = (itemName) => {
    const updatedItems = {
      ...this.state.items
    };

    updatedItems[itemName] = this.state.items[itemName] - 1;

    this.setState({
      items: updatedItems
    });
  }

  changeMenuQuantity = (itemName, num) => {
    const menuQuantity = {
      ...this.state.menuItems
    };

    menuQuantity[itemName] = num;

    this.setState({
      menuItems: menuQuantity
    });
  }

  addItemToCart = (itemName) => {
    const num = parseInt(this.state.menuItems[itemName] || 0);

    if (num < 1) {
      return;
    }

    const updatedItems = {
      ...this.state.items
    };

    if (updatedItems[itemName] < 0) {
      updatedItems[itemName] = 0;
    }

    updatedItems[itemName] += num;

    this.setState({
      items: updatedItems
    });
    console.log(itemName);
    console.log(this.state.menuItems[itemName]);
  }

  render() {
    return(
      <div className={classes.Layout}>
        <Toolbar clickShoppingCartButton={this.openShoppingCart}/>
        <Menu itemState={this.state.menuItems} changeMenuQuantity={this.changeMenuQuantity} addItemToCart={this.addItemToCart}/>
        <ModalFrame show={this.state.showShoppingCart}>
          <ShoppingCart
            closeShoppingCart={this.closeShoppingCart}
            itemState={this.state.items}
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}/>
        </ModalFrame>
      </div>
    )
  }
}

function initializeItemsToState(num) {
  let items = {};
  for ( let i = 0; i < itemList.length; i++ ) {
    items[itemList[i].name] = num;
  }
  return items;
}

export default Layout;



