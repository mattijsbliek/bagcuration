import React, { useState } from 'react';
import { sortBy } from 'lodash';
import CdnImage from 'components/CdnImage';

import styles from './styles.module.css';

const Carousel = ({ images, slug }) => {
  images = sortBy(images, ['filename']);
  const [activeImage, setActiveImage] = useState(images[0].filename);

  return (
    <div>
      <div>
        <CdnImage src={`bags/${slug}/${activeImage}?nf_resize=fit&w=430`} />
      </div>
      <ul className={styles.controls}>
        {images.map(({ filename }) => (
          <li key={filename}>
            <button
              className={filename === activeImage ? styles.isActive : ''}
              onClick={() => setActiveImage(filename)}
            >
              <CdnImage
                src={`bags/${slug}/${filename}?nf_resize=smartcrop&w=80&h=100`}
                alt=""
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
