import React from 'react';
import CdnImage from 'components/CdnImage';

import styles from './styles.module.css';

const Carousel = ({ images, slug }) => (
  <div>
    <div>
      {images.map(({ filename }, index) => {
        if (index === 0) {
          return <CdnImage key={filename} src={`bags/${slug}/${filename}`} />;
        }

        return <CdnImage key={filename} dataSrc={`bags/${slug}/${filename}`} />;
      })}
    </div>
    <ul className={styles.controls}>
      {images.map(({ filename }) => (
        <li key={filename}>
          <button>
            <CdnImage src={`bags/${slug}/${filename}`} alt="" />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Carousel;
