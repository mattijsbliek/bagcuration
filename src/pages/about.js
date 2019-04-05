import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper';

const About = () => (
  <Layout title="About">
    <Wrapper>
      <h1>About</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Wrapper>
  </Layout>
);

export default About;
