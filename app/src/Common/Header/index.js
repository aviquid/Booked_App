/**
 * Header
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default function Header(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand navbar-left">
          <a href="/">Booked up!</a>
        </div>
        <ul className="nav navbar-nav navbar-right navbar">
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/sign-up">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
