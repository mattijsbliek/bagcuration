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

const Card = ({ name, subheading, to, price, currency, images, lazy }) => (
  <Link className={styles.card} to={to}>
    <figure className={styles.figure}>
      <picture>
        {images.map((image, index) => {
          const src = withPrefix(`${image}?nf_resize=smartcrop&w=390&h=490`);
          const src2x = withPrefix(`${image}?nf_resize=smartcrop&w=780&h=980`);
          const srcset = `${src}, ${src2x} 2x`;

          // If this is not the last img, return <source>
          if (index !== images.length - 1) {
            return (
              <source
                key={image}
                type={getImageType(image)}
                srcSet={srcset}
                className={styles.image}
                alt=""
              />
            );
          }

          // If this is the last img, return <img>
          return (
            <img
              key={image}
              src={src}
              srcSet={`${src}, ${src2x} 2x`}
              loading={lazy ? 'lazy' : null}
              className={styles.image}
              alt=""
            />
          );
        })}
      </picture>
    </figure>
    <h2 className={styles.title}>{name}</h2>
    <p className={styles.subheading}>{subheading}</p>
    <p className={styles.price}>
      {new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency,
      }).format(price)}
    </p>
  </Link>
);

export default Card;
