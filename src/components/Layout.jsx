import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Header from 'src/components/Header.jsx';
import Footer from 'src/components/Footer.jsx';
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

const Layout = ({ children, medium }) => (
  <article>
    <Header />
    <StyledContainer medium={medium}>{children}</StyledContainer>
    <Footer />
  </article>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
