import React from 'react';
import Wrapper from 'components/Wrapper';
import './styles.css';

const Page = ({ children }) => (
  <Wrapper>
    <article className="page">{children}</article>
  </Wrapper>
);

export default Page;
