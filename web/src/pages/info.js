import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
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

const Index = ({ data }) => {
  const { edges } = data.allSanityInfo;
  return (
    <Layout
      extraCredit={
        <>
          <p>
            Humaaans illustrations made by{' '}
            <a href="https://twitter.com/pablostanley">Pablo Stanley</a>{' '}
            licensed by{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          </p>
          <p>
            Artemis statue{' '}
            <a href="https://www.greekmythology.com/Myths/The_Myths/Zeus's_Lovers/Leto/leto.html">
              Leto: GreekMythology.com
            </a>
          </p>
        </>
      }
    >
      <MetaTags title="Info" />
      {edges.map(edge => {
        const { title, _rawOverview, image, link_title, link_url } = edge.node;
        return (
          <GridColumn key={title}>
            <div>
              <h2>{title}</h2>
              <div>
                <BlockContent blocks={_rawOverview} />
              </div>
              {link_title && <Link to={link_url}>{link_title}</Link>}
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
    allSanityInfo(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          _rawOverview
          link_title
          link_url
          image {
            asset {
              url
            }
          }
          order
        }
      }
    }
  }
`;

export default Index;
