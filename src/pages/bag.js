import React from 'react';
import { graphql } from 'gatsby';

import BagDetail from 'components/BagDetail';
import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper';

const Bag = ({
  data: {
    airtable: { data },
  },
}) => {
  return (
    <Layout>
      <Wrapper>
        <BagDetail {...data} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    airtable(
      table: { eq: "tblv0NCJQXqW2STVl" }
      data: { slug: { eq: $slug } }
    ) {
      data {
        brand
        name
        currency
        price
        url
        slug
        images {
          filename
        }
      }
    }
  }
`;

export default Bag;
