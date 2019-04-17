import React from 'react';
import Button from 'components/Button';
import extractDomain from 'utils/extract-domain';

const LinkProduct = ({ url }) => (
  <Button href={url} target="_blank" rel="noopener noreferrer">
    View on {extractDomain(url)}
  </Button>
);

export default LinkProduct;
