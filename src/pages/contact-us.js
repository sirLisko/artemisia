import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'src/components/Layout';

const Index = ({ data }) => {
  return (
    <Layout>
      <h1>Contact us</h1>
      <p>
        Please complete the form below with all the required information and we
        will get back to you as soon as possible. At the moment we hold group
        sessions as well as one to one classes in the comfort of your home, at
        no additional costs. Prices are available as single classes or packages.
      </p>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    allCourse {
      edges {
        node {
          title
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
