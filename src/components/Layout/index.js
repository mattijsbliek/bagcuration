import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Meta from 'components/Meta';

const Layout = ({ children, title, isHome }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Meta title={title} />
        {isHome ? <Banner /> : <Header />}
        <main>{children}</main>
        <Helmet />
        <Footer />
      </>
    )}
  />
);

export default Layout;
