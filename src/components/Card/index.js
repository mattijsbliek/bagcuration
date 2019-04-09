import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import styles from './styles.module.css';

const getImageType = url => {
  const extension = url.split('.').pop();

  switch (extension) {
    case 'webp':
      return 'image/webp';
    case 'svg':
      return 'image/svg+xml';
    case 'png':
      return 'image/png';
    case 'jpg':
    default:
      return 'image/jpeg';
  }
};

const Card = ({ name, subheading, to, images }) => (
  <Link className={styles.card} to={to}>
    <figure className={styles.figure}>
      <picture>
        {images.map((image, index) => {
          // If this is not the last img, return <source>
          if (index !== images.length - 1) {
            return (
              <source
                key={image}
                type={getImageType(image)}
                srcset={withPrefix(`${image}?nf_resize=smartcrop&w=390&h=490`)}
                className={styles.image}
                alt=""
              />
            );
          }

          // If this is the last img, return <img>
          return (
            <img
              src={withPrefix(`${image}?nf_resize=smartcrop&w=390&h=490`)}
              className={styles.image}
              alt=""
            />
          );
        })}
      </picture>
    </figure>
    <h2 className={styles.title}>{name}</h2>
    <p className={styles.subheading}>{subheading}</p>
  </Link>
);

export default Card;
