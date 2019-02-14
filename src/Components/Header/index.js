import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrap, Menu } from './styled';
import cart from './cart.svg'

class Header extends Component {
  render () {
    return (
      <Wrap>
        <div>
          <Menu>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/wishlist"><img src={cart} /></Link></li>
          </Menu>
        </div>
      </Wrap>
    )
  }
}

export default Header