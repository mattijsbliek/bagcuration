import * as React from 'react';
import styles from './styles.module.css';

const CardGrid = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);

export default CardGrid;
