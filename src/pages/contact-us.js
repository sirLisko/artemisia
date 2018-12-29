import React from 'react';
import styled from '@emotion/styled';

import Layout from 'src/components/Layout';
import ContactForm from 'src/components/ContactForm';
import theme from 'src/theme';

const StyledContactForm = styled(ContactForm)`
  margin-top: 5rem;
  label {
    font-weight: 300;
    font-style: normal;
  }
  input,
  textarea {
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    border-radius: 2px;
    width: 100%;
    max-width: 500px;
  }
  textarea {
    max-width: 700px;
    height: 200px;
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
`;

const Index = () => {
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
      <StyledContactForm />
    </Layout>
  );
};

export default Index;
