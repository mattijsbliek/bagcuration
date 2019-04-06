import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import styles from './styles.module.css';

const Card = ({ name, subheading, to, image }) => (
  <Link className={styles.card} to={to}>
    <figure className={styles.figure}>
      <img
        src={withPrefix(`${image}?nf_resize=smartcrop&w=390&h=490`)}
        className={styles.image}
        alt=""
      />
    </figure>
    <h2 className={styles.title}>{name}</h2>
    <p className={styles.subheading}>{subheading}</p>
  </Link>
);

export default Card;
