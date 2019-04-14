import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
        <Header compact={!isHome} siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

export default Layout;
