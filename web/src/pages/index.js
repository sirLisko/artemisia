import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import MetaTags from 'src/components/MetaTags';
import SitePopup from 'src/components/SitePopup';
import theme from 'src/theme';

const StyledHome = styled.div`
  padding: 1rem;
  background-image: url(/imgs/homepage.jpg);
  background-size: cover;
  height: 100vh;
  background-position: center;
  color: #fff;
  text-align: center;
  span {
    letter-spacing: 0.25rem;
  }
  & > div {
    margin: 20vh auto;
    ${theme.mq.small} {
      margin: 30vh auto;
    }
  }
  h1 {
    color: #fff;
    ${theme.mq.small} {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
  }
  a {
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    padding: 0.75rem 0;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.14em;
    display: block;
    width: 170px;
    margin: 2rem auto;
    font-size: 14px;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${theme.colors.black};
      background: #fff;
    }
    ${theme.mq.small} {
      margin-top: 3rem;
    }
  }
`;

const Index = ({ data }) => {
  return (
    <Fragment>
      <StyledHome>
        <MetaTags title="Antenatal Classes in London" />
        <span>Antenatal classes in London</span>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <div>#myfriendisamidwife</div>
          <Link to="/info">Find out more!</Link>
        </div>
      </StyledHome>
      <SitePopup staticLayout />
    </Fragment>
  );
};

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Index;
