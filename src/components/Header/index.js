import { Link } from 'gatsby';
import React from 'react';

import Wrapper from '../Wrapper';

import logo from '../../images/logo.svg';
import styles from './styles.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="Bag Curation" />
      </Link>
      <nav className={styles.nav}>
        <Link to="/about">About</Link>
        <Link to="/suggest-a-bag">Suggest a bag</Link>
      </nav>
    </Wrapper>
  </header>
);

export default Header;
