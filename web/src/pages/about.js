import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import BlockContent from '@sanity/block-content-to-react';

import MetaTags from 'src/components/MetaTags';
import Layout from 'src/components/Layout';
import theme from 'src/theme';

const GridColumn = styled.div`
  & + & {
    margin-top: 3rem;
  }
  img {
    margin-top: 2rem;
  }
  ${theme.mq.medium} {
    display: grid;
    grid-template-columns: minmax(min-content, ${theme.sizes.column}) minmax(
        min-content,
        ${theme.sizes.column}
      );
    grid-gap: 5rem;
    align-items: center;
    justify-content: center;
    img {
      margin-top: 0;
      margin-bottom: 0;
    }
    &:nth-of-type(odd) {
      img {
        order: -1;
      }
    }
  }

  a {
    color: ${theme.colors.black};
    background: #fff;
    border: 2px solid currentColor;
    padding: 0.75rem 0;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.14em;
    display: block;
    width: 160px;
    margin: 2rem auto;
    font-size: 14px;
    transition: all 0.4s ease-in-out;
    text-align: center;
    &:hover {
      color: #fff;
      background: ${theme.colors.black};
    }
`;

const StyledQuote = styled.div`
  text-align: right;
  margin: 2rem auto;
`;

const Index = ({ data }) => {
  const { edges } = data.allSanityPerson;
  return (
    <Layout>
      <MetaTags title="About Us" />
      {edges.map(edge => {
        const { name, _rawOverview, quote, image } = edge.node;
        return (
          <GridColumn key={name}>
            <div>
              <h2>{name}</h2>
              {quote && (
                <StyledQuote>
                  <em>- {quote}</em>
                </StyledQuote>
              )}
              <div>
                <BlockContent blocks={_rawOverview} />
              </div>
            </div>
            {image && image.asset && image.asset.url && (
              <img src={image.asset.url} alt="" />
            )}
          </GridColumn>
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
    allSanityPerson(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          quote
          _rawOverview
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

export default Index;
