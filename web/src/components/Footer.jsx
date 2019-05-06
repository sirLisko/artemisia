import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import theme from 'src/theme';
import Social from './Social';

const StyledFooter = styled.footer`
  max-width: ${theme.sizes.max_width};
  border-top: 1px solid rgba(38, 51, 51, 0.75);
  text-align: center;
  margin: 0 auto 1rem;
  padding-top: 2rem;
  img {
    width: 300px;
    margin: 0;
  }
  p {
    margin-bottom: 0.25rem;
  }
  a {
    color: currentColor;
  }
`;

const StyledCredit = styled.div`
  font-size: 0.75rem;
`;

const StyledExtraCredit = styled.div`
  opacity: 0.25;
`;

const Footer = ({ extraCredit }) => {
  return (
    <StyledFooter>
      <Link to="/">
        <img src="/imgs/logo.jpg" alt="logo" />
      </Link>
      <Social isFooter />
      <StyledCredit>
        <p>
          © Copyright {new Date().getFullYear()} Artemis Midwifery ltd - All
          rights reserved.
        </p>
        <p>
          Made with ♥ by{' '}
          <a href="https://sirlisko.com">Luca Lischetti (@sirLisko)</a>
        </p>
        {extraCredit && <StyledExtraCredit>{extraCredit}</StyledExtraCredit>}
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  extraCredit: PropTypes.node,
};

export default Footer;
