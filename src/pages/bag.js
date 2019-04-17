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
    <Layout title={`${data.brand} ${data.name}`}>
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
        width
        height
        depth
        weight
        description
        images {
          filename
        }
      }
    }
  }
`;

export default Bag;
