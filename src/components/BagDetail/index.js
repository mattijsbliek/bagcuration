import * as React from 'react';
import Carousel from 'components/Carousel';
import LinkProduct from 'components/LinkProduct';
import styles from './styles.module.css';

const BagDetail = ({ brand, name, currency, price, url, slug, images }) => (
  <article className={styles.bag}>
    <Carousel images={images} slug={slug} />
    <div>
      <p className={styles.brand}>{brand}</p>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.priceFavorite}>
        <p>
          {new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency,
          }).format(price)}
        </p>
        <button>Favorite</button>
      </div>
      <p>
        <LinkProduct url={url} />
      </p>
      <div className={styles.specs}>
        <h2>Specifications</h2>
        <dl>
          <dt>Weight</dt>
          <dd>200 grams</dd>
        </dl>
      </div>
    </div>
  </article>
);

export default BagDetail;
