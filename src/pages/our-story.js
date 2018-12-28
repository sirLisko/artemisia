import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

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

const Index = ({ data }) => {
  const { edges } = data.allStory;
  return (
    <Layout>
      {edges.map(edge => {
        const { title, overview, image, link_title, link_url } = edge.node;
        return (
          <GridColumn key={title}>
            <div>
              <h2>{title}</h2>
              <div>
                {overview.map((text, i) => (
                  <p key={i}>{text.children[0].text}</p>
                ))}
              </div>
              {link_title && <Link to={link_url}>{link_title}</Link>}
            </div>
            {image && image.imageUrl && <img src={image.imageUrl} alt="" />}
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
    allStory(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          overview {
            style
            children {
              text
            }
          }
          link_title
          link_url
          image {
            imageUrl
          }
          order
        }
      }
    }
  }
`;

export default Index;
