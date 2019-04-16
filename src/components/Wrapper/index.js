import * as React from 'react';
import styles from './styles.module.css';

const Wrapper = ({ children, className = '' }) => (
  <div className={`${styles.wrapper} ${className}`}>{children}</div>
);

export default Wrapper;
