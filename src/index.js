import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './Components/Header'; 
import Home from './Containers/Home';
import Products from './Containers/Products';
import Wishlist from './Containers/Wishlist';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
		border: 0;
		font-family: 'Nanum Gothic', sans-serif;
		font-size: 100%;
		color: #000;
    vertical-align: middle;
  }

  ol, ul {
    list-style: none;
  }

  li:focus {
    outline: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
	}
	
	a {
		text-decoration: none;
    outline: none;
  }
  
  button {
    padding: 0;
    background-color: transparent;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }

  *:focus { outline: none; }
`

ReactDOM.render(
  <Router>
    <Fragment>
      <GlobalStyle />
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/wishlist" component={Wishlist} />
        </Switch>
      </div>
    </Fragment>
  </Router>, 
  document.getElementById('root')
);

