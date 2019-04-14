import React from 'react';
import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <span role="img" aria-hidden>
      💻️
    </span>{' '}
    made by{' '}
    <a href="https://twitter.com/mattijsbliek" rel="noopener noreferrer">
      @mattijsbliek
    </a>
  </footer>
);

export default Footer;
