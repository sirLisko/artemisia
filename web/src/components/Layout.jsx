import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Location } from '@reach/router';

import Header from 'src/components/Header.jsx';
import Footer from 'src/components/Footer.jsx';
import SitePopup from 'src/components/SitePopup.jsx';
import { rhythm } from 'src/utils/typography';
import theme from 'src/theme';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.medium ? '900px' : '1200px')};
  padding: 1rem;
  ${theme.mq.small} {
    padding: ${rhythm(2)};
  }
  padding-top: ${rhythm(1.5)};
`;

const Layout = ({ children, medium, extraCredit }) => (
  <Location>
    {({ location }) => (
      <article>
        <Header location={location} />
        <StyledContainer medium={medium}>{children}</StyledContainer>
        <Footer extraCredit={extraCredit} />
        <SitePopup />
      </article>
    )}
  </Location>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  medium: PropTypes.bool,
  extraCredit: PropTypes.node,
};

export default Layout;
