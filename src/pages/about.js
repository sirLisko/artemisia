import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Index = ({ data }) => {
  const { edges } = data.allPerson;
  return (
    <Layout>
      {edges.map(edge => {
        const { name, overview } = edge.node;
        return (
          <div key={name} style={{ marginBottom: '1rem' }}>
            <h3>{name}</h3>
            <div>
              {overview.map((text, i) => (
                <p key={i}>{text.children[0].text}</p>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    allPerson {
      edges {
        node {
          id
          name
          overview {
            style
            children {
              text
            }
          }
        }
      }
    }
  }
`;

export default Index;
