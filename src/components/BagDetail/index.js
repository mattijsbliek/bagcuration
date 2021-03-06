import * as React from 'react';
import Carousel from 'components/Carousel';
import LinkProduct from 'components/LinkProduct';
import Specs from 'components/Specs';

import styles from './styles.module.css';

const BagDetail = ({
  brand,
  name,
  currency,
  price,
  url,
  slug,
  images,
  description,
  ...rest
}) => (
  <article className={styles.bag}>
    <div>
      <p className={styles.brand}>{brand}</p>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.price}>
        {new Intl.NumberFormat('nl-NL', {
          style: 'currency',
          currency,
        }).format(price)}
      </p>
      {description && (
        <div className={styles.description}>
          {description.split('\n').map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
      <p>
        <LinkProduct url={url} />
      </p>
      <Specs {...rest} />
    </div>
    <Carousel images={images} slug={slug} />
  </article>
);

export default BagDetail;
