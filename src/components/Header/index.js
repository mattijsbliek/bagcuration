import { Link, withPrefix } from 'gatsby';
import React from 'react';

import Wrapper from '../Wrapper';

import styles from './styles.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Wrapper>
      <Link to="/">
        <img src={withPrefix('images/logo.svg')} alt="Bag Curation" />
      </Link>
      <nav className={styles.nav}>
        <Link to="/about">About</Link>
        <Link to="/suggest-a-bag">Suggest a bag</Link>
      </nav>
    </Wrapper>
  </header>
);

export default Header;
