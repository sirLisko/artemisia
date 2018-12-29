import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Location } from '@reach/router';

import theme from 'src/theme';

const StyledLogo = styled(Link)`
  img {
    height: 50px;
    margin: 0;
  }
`;

const StyledHeader = styled('nav')`
  position: relative;
  padding: 1.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.sizes.max_width};
  margin: 0 auto;
  input {
    display: none;
  }
  border-bottom: 1px solid rgba(38, 51, 51, 0.75);
`;

const Hamburger = styled('label')`
  ${theme.mq.medium} {
    display: none;
  }
  position: relative;
  height: 20px;
  width: 25px;
  span,
  span:after,
  span:before {
    position: absolute;
    z-index: 100;
    width: 25px;
    height: 3px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #000;
  }
  span {
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 75ms;
    top: 50%;
    display: block;
    margin-top: -2px;
    :before {
      transition: top 75ms ease 0.12s, opacity 75ms ease;
      top: -7px;
    }
    :after {
      bottom: -7px;
    }
    :after,
    :before {
      display: block;
      content: '';
    }
  }
  input:checked ~ & span {
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(45deg);
    :before {
      top: 0;
      transition: top 75ms ease, opacity 75ms ease 0.12s;
      opacity: 0;
    }
    :after {
      bottom: 0;
      transition: bottom 75ms ease,
        transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
      transform: rotate(-90deg);
    }
  }
`;

const Links = styled('ul')`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 1rem 0;
  margin: 0 -1rem;
  background: #fff;
  top: 0;
  list-style-type: none;
  transform: translate(0, -100%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  ${theme.mq.medium} {
    transform: none;
    display: flex;
    position: inherit;
    padding: 0;
    align-items: center;
    width: auto;
    margin: 0;
  }
  input:checked ~ & {
    top: 70px;
    transform: none;
  }
  li {
    padding: 1rem 0;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    ${theme.mq.medium} {
      width: auto;
      padding: 0;
      margin-left: 1.5rem;
      button {
        height: 40px;
        width: auto;
        padding: 0 1rem;
        font-size: 15px;
        text-transform: initial;
      }
    }
  }
  a {
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.black};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    ${theme.mq.medium} {
      font-size: 15px;
      font-weight: normal;
    }
  }
`;

const StyledLink = styled.li`
  a {
    text-decoration: ${props => props.selected && 'underline'};
    pointer-events: ${props => props.selected && 'none'};
  }
`;

const links = [
  {
    href: '/info',
    text: 'Home',
  },
  {
    href: '/our-story',
    text: 'Our Story',
  },
  {
    href: '/classes',
    text: 'Classes',
  },
  {
    href: '/about',
    text: 'About Us',
  },
  {
    href: '/contact-us',
    text: 'Contact',
  },
];

const Header = () => {
  return (
    <StyledHeader role="navigation">
      <input id="menu-toggle" type="checkbox" />
      <StyledLogo to="/">
        <img src="/imgs/logo_small.png" alt="logo" />
      </StyledLogo>
      <Hamburger htmlFor="menu-toggle">
        <span />
      </Hamburger>
      <Links>
        <Location>
          {({ location }) =>
            links.map(l => (
              <StyledLink key={l.text} selected={l.href === location.pathname}>
                <Link to={l.href}>{l.text}</Link>
              </StyledLink>
            ))
          }
        </Location>
      </Links>
    </StyledHeader>
  );
};

export default Header;
