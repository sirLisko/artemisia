import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import ContactForm from 'src/components/ContactForm';
import theme from 'src/theme';

const StyledContactForm = styled(ContactForm)`
  label {
    font-weight: 300;
    font-style: normal;
  }
  select,
  input,
  textarea {
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    border-radius: 2px;
  }
  input {
    width: 100%;
    max-width: 500px;
  }
  textarea {
    max-width: 700px;
    width: 100%;
    height: 200px;
  }
  select {
    height: 50px;
    cursor: pointer;
  }
  button {
    color: ${theme.colors.black};
    background: #fff;
    cursor: pointer;
    border: 2px solid currentColor;
    padding: 0.75rem 0;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.14em;
    display: block;
    width: 160px;
    font-size: 14px;
    transition: all 0.4s ease-in-out;
    text-align: center;
    &:hover {
      color: #fff;
      background: ${theme.colors.black};
    }
  }
  em {
    font-size: 0.75rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allCourse;
  const options = edges
    .filter(({ node }) => node.title)
    .map(({ node }) => node.title);
  return (
    <Layout>
      <h1>Contact us</h1>
      <p>
        Please complete the form below with all the required information and we
        will get back to you as soon as possible.
      </p>
      <p>
        At the moment we hold group sessions as well as one to one classes in
        the comfort of your home, at no additional costs.
      </p>
      <p>Prices are available as single classes or packages.</p>
      <h2 style={{ margin: '4rem auto 2rem' }}>Send us an email</h2>
      <StyledContactForm
        select={{
          options,
          label: 'I am interested in:',
          name: 'interested_in',
          placeholder: 'Please select a Course',
        }}
      />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    allCourse(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          quote
          overview {
            style
            children {
              text
            }
          }
          price
          duration
        }
      }
    }
  }
`;

export default Index;
