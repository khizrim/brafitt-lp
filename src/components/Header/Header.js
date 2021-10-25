import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../../images/logo.svg';

const Header = () => (
  <header className="header">
    <Link className="header__logo-link" to="/">
      <img className="header__logo" src={logo} alt="Brafitt" />
    </Link>
  </header>
);

export default Header;
