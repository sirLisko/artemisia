import React from 'react';
import Proptypes from 'prop-types';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import styled from '@emotion/styled';

import theme from 'src/theme';

const facebookUrl =
  'https://www.facebook.com/Artemis-Midwifery-2204602413186468/';
const instagramUrl = 'https://www.instagram.com/artemis_midwifery/';

const StyledSocial = styled.div`
  margin: ${props => props.isFooter && '0 auto 1rem'};
  a {
    margin: 0 0.25rem;
  }
  svg {
    height: 2em;
    width: 2em;
    transition: all 0.4s ease-in-out;
    color: ${props => (props.isFooter ? theme.colors.black : '#fff')};
    &:hover {
      color: ${theme.colors.black};
      background-color: #fff;
    }
  }
`;

function Social({ isFooter }) {
  return (
    <StyledSocial isFooter={isFooter}>
      <a
        href={facebookUrl}
        alt="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook />
      </a>
      <a
        href={instagramUrl}
        alt="instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram />
      </a>
    </StyledSocial>
  );
}

Social.propTypes = {
  isFooter: Proptypes.bool,
};

export default Social;
