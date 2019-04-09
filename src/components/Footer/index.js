import React from 'react';
import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    made with{' '}
    <span role="img" aria-label="love">
      ❤️
    </span>{' '}
    by{' '}
    <a href="https://twitter.com/mattijsbliek" rel="noopener noreferrer">
      @mattijsbliek
    </a>
  </footer>
);

export default Footer;
