import React from 'react';
import styles from './styles.module.css';

const parseDimension = unit => {
  return `${unit} cm (${Math.round(unit * 25.5) / 100} inch)`;
};

const Specs = ({ width, height, depth }) => (
  <div className={styles.specs}>
    <h2>Specifications</h2>
    <dl>
      <dt>Width</dt>
      <dd>{parseDimension(width)}</dd>
      <dt>Height</dt>
      <dd>{parseDimension(height)}</dd>
      <dt>Depth</dt>
      <dd>{parseDimension(depth)}</dd>
    </dl>
  </div>
);

export default Specs;
