import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from 'components/Header';
import Meta from 'components/Meta';

const Layout = ({ children, title }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </>
    )}
  />
);

export default Layout;
