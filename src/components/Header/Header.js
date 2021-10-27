import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../../images/logo-v.svg';

const Header = () => (
  <header className="header">
    <Link className="header__logo-link" to="/">
      <img className="header__logo" src={logo} alt="Brafitt" />
    </Link>
    <p className="header__description">
      Первый брафиттинг <br /> в Дагестане
    </p>
  </header>
);

export default Header;
