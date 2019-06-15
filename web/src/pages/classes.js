import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { StyledButton } from 'src/theme';

import MetaTags from 'src/components/MetaTags';
import Layout from 'src/components/Layout';

const StyledBox = styled.div`
  & + & {
    margin-top: 7rem;
  }
  h2 {
    text-align: center;
  }
`;

const StyledQuote = styled.div`
  text-align: right;
  margin: 2rem auto;
`;

const StyledPrice = styled.div`
  font-weight: bold;
  text-align: right;
  margin: 2rem auto;
  p {
    font-size: 12px;
    font-weight: normal;
    font-style: italic;
  }
`;

const StyledDuration = styled.div`
  text-align: right;
  p {
    margin: 0.25rem auto;
    font-style: italic;
  }
  em {
    display: block;
    font-size: 12px;
    font-style: italic;
  }
`;

const formatDuration = (duration, i) => {
  const d = duration.split(',');
  return d.lenth === 1 ? (
    <div key={d}>d</div>
  ) : (
    <div key={d[0]}>
      <strong>{d[0]}</strong>
      <em>{d[1]}</em>
    </div>
  );
};

class Index extends Component {
  state = {
    stripeVisible: false,
  };

  componentDidMount() {
    const {
      data: {
        sanityStripeSettings: { apikey, checkout_visible },
      },
    } = this.props;
    if (checkout_visible && apikey) {
      this.stripe = window.Stripe(apikey);
      this.setState({ stripeVisible: true });
    }
  }

  handleClick = stripe_id => {
    this.stripe
      .redirectToCheckout({
        items: [{ sku: stripe_id, quantity: 1 }],
        successUrl: 'https://artemismidwiferylondon.com/thanks/',
        cancelUrl: 'https://your-website.com/canceled',
        submitType: 'book',
      })
      .then(result => {
        if (result.error) {
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
  };

  render() {
    const {
      data: {
        allSanityCourse: { edges },
      },
    } = this.props;
    const { stripeVisible } = this.state;
    return (
      <Layout medium>
        <MetaTags title="Classes" />
        {edges.map(edge => {
          const {
            title,
            overview,
            quote,
            price,
            duration,
            stripeProduct,
          } = edge.node;
          return (
            <StyledBox key={title} style={{ marginBottom: '1rem' }}>
              <h2>{title}</h2>
              {quote && (
                <StyledQuote>
                  <em>- {quote}</em>
                </StyledQuote>
              )}
              <div>
                {overview.map((text, i) => (
                  <p key={i}>{text.children[0].text}</p>
                ))}
              </div>
              {duration && (
                <StyledDuration>
                  {duration
                    .map(formatDuration)
                    .reduce(
                      (accu, elem, i) =>
                        !accu ? [elem] : [...accu, <p key={i}>or</p>, elem],
                      null,
                    )}
                </StyledDuration>
              )}
              {price && (
                <StyledPrice>
                  £{price}
                  <p>
                    (fee for you to attend the course as a couple or individual)
                  </p>
                </StyledPrice>
              )}
              {stripeVisible && stripeProduct && stripeProduct.sku && (
                <div style={{ textAlign: 'right' }}>
                  <StyledButton
                    role="link"
                    onClick={() => this.handleClick(stripeProduct.sku)}
                  >
                    Checkout
                  </StyledButton>
                  <div id="error-message" />
                </div>
              )}
            </StyledBox>
          );
        })}
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    allSanityCourse(sort: { fields: [order], order: ASC }) {
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
          stripeProduct {
            sku
          }
        }
      }
    }
    sanityStripeSettings {
      apikey
      checkout_visible
    }
  }
`;

export default Index;
