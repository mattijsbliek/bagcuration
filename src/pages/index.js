import React from 'react';
import { graphql } from 'gatsby';

// Components
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Wrapper from '../components/Wrapper';

const IndexPage = ({
  data: {
    allAirtable: { edges: data },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Wrapper>
        <CardGrid>
          {data.map(({ node: { data: bag } }) => (
            <Card
              key={bag.name}
              {...bag}
              to={`/bags/${bag.slug}`}
              subheading={bag.brand}
              image={`${bag.slug}/cover.png`}
            />
          ))}
        </CardGrid>
      </Wrapper>
    </Layout>
  );
};

export const bagsQuery = graphql`
  query BagsQuery {
    allAirtable(filter: { table: { eq: "tblv0NCJQXqW2STVl" } }) {
      edges {
        node {
          data {
            brand
            name
            currency
            price
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
