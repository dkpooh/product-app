import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Controller from '../../Containers/Controller.js';
import { Wrap, Menu } from './styled.js';
import cart from './cart.svg'

const Header = ({ wishItemsCouter }) => {
  return (
    <Wrap>
        <div>
          <Menu>
            <li><NavLink activeClassName="selected" exact to="/">HOME</NavLink></li>
            <li><NavLink activeClassName="selected" exact to="/products">PRODUCTS</NavLink></li>
            <li><NavLink activeClassName="selected" exact to="/wishlist"><img src={cart} /></NavLink></li>
          </Menu>
        </div>
    </Wrap>
  )
}

export default Controller(Header);