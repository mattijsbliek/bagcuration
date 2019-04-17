import React from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.css';

const getElement = props => {
  const { to, href } = props;

  if (href) {
    return 'a';
  }

  if (to) {
    return Link;
  }

  return 'button';
};

const Button = ({ children, theme, ...props }) => {
  return React.createElement(
    getElement(props),
    {
      ...props,
      className: `${styles.button} ${theme ? styles[theme] : ''}`,
    },
    <>
      {children}{' '}
      <svg width="13" height="12" viewBox="0 0 13 12">
        <path
          fill="currentColor"
          d="M8.28303624,7 L0.5,7 L0.5,5 L8.28303624,5 L5.21144334,2.0218382 L6.60365008,0.58595506 L10.7509766,4.60712899 L10.7728148,4.58595506 L11.4581677,5.2928089 L12.1650215,5.9781618 L12.1438476,6 L12.1650215,6.0218382 L11.4581677,6.7071911 L10.7728148,7.41404494 L10.7509766,7.39287101 L6.60365008,11.4140449 L5.21144334,9.9781618 L8.28303624,7 Z"
        />
      </svg>
    </>
  );
};

export default Button;
