/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config();
const path = require('path');

const bagTemplate = path.resolve('src/pages/bag.js');

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  return graphql(`
    query {
      allAirtable(filter: { table: { eq: "${process.env.AIRTABLE_TABLE}" } }) {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (!result.data) {
      console.error('Something went wrong while fetching slugs', result.errors);
      return;
    }

    result.data.allAirtable.edges.forEach(({ node: { data: { slug } } }) => {
      actions.createPage({
        path: `bags/${slug}`,
        component: bagTemplate,
        context: {
          slug,
        },
      });
    });
  });
};
