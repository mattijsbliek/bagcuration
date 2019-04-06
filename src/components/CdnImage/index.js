import React from 'react';

const getUrl = src => `/images/${src}`;

const CdnImage = ({ src, dataSrc, alt = '', ...rest }) => (
  <img
    src={src && getUrl(src)}
    data-src={dataSrc && getUrl(dataSrc)}
    alt={alt}
    {...rest}
  />
);

export default CdnImage;
