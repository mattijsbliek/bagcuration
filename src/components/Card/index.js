import * as React from 'react';
import { Link } from 'gatsby';

import CdnImage from 'components/CdnImage';
import styles from './styles.module.css';

const Card = ({ name, subheading, to, image }) => (
  <Link className={styles.card} to={to}>
    <figure className={styles.figure}>
      <CdnImage src={image} className={styles.image} alt="" />
    </figure>
    <h2 className={styles.title}>{name}</h2>
    <p className={styles.subheading}>{subheading}</p>
  </Link>
);

export default Card;
