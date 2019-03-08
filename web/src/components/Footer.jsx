import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import theme from 'src/theme';

const StyledFooter = styled.footer`
  max-width: ${theme.sizes.max_width};
  border-top: 1px solid rgba(38, 51, 51, 0.75);
  text-align: center;
  margin: 0 auto;
  padding-top: 2rem;
  img {
    width: 300px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <img src="/imgs/logo.jpg" alt="logo" />
      </Link>
    </StyledFooter>
  );
};

export default Footer;
