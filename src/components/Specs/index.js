import React from 'react';
import styles from './styles.module.css';

const parseDimension = unit => {
  return `${Math.round(unit * 10) / 10} cm (${Math.round(unit * 2.55) /
    10} inch)`;
};

const Specs = ({ width, height, depth, weight }) => (
  <div className={styles.specs}>
    <h2>Specifications</h2>
    <dl>
      <dt>Width</dt>
      <dd>{parseDimension(width)}</dd>
      <dt>Height</dt>
      <dd>{parseDimension(height)}</dd>
      <dt>Depth</dt>
      <dd>{parseDimension(depth)}</dd>
      {weight && (
        <>
          <dt>Weight</dt>
          <dd>{weight} kg</dd>
        </>
      )}
    </dl>
  </div>
);

export default Specs;
