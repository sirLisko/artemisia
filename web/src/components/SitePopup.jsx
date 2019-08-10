import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

const popupQuery = graphql`
  query {
    sanitySitePopup {
      title
      text
      link
      visible
    }
  }
`;

const StyledPopup = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
  border-top: 1px solid;
  p {
    margin: 0;
  }
`;

const globalPadding = (
  <Global
    styles={css`
      body {
        padding-bottom: 5rem;
      }
    `}
  />
);

const SitePopup = ({ staticLayout }) => (
  <StaticQuery
    query={popupQuery}
    render={({ sanitySitePopup: { title, text, link, visible } = {} }) => {
      if (!visible) {
        return null;
      }
      return (
        <Fragment>
          {!staticLayout && globalPadding}
          <StyledPopup>
            <b>{title}</b>
            {(text || link) && (
              <p>
                {text} {text && link && '- '}
                {link && (
                  <a
                    href={link}
                    alt="more info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    more info
                  </a>
                )}
              </p>
            )}
          </StyledPopup>
        </Fragment>
      );
    }}
  />
);

SitePopup.propTypes = {
  staticLayout: PropTypes.bool,
};

export default SitePopup;
