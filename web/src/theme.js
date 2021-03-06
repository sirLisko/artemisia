import styled from '@emotion/styled';

const theme = {
  colors: {
    black: '#181818',
    black_light: '#4A4A4A',
    gray_lighter: '#F2F2F2',
    gray: '#e6e6e6',
    gray_dark: '#7e7e7e',
    gray_darker: '#585858',
  },
  box_shadow: {
    default: '0 8px 10px 0 #eeeef2, 0 -2px 24px 0 #f4f4f6',
  },
  sizes: {
    column: '500px',
    max_width: '1200px',
  },
  mq: {
    small: '@media (min-width: 620px)',
    medium: '@media (min-width: 800px)',
    large: '@media (min-width: 1024px)',
    max: {
      small: '@media (max-width: 619px)',
      medium: '@media (max-width: 800px)',
    },
  },
};

export const StyledButton = styled.button`
  color: ${theme.colors.black};
  background: #fff;
  cursor: pointer;
  border: 2px solid currentColor;
  padding: 0.75rem 0;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.14em;
  width: 160px;
  font-size: 14px;
  transition: all 0.4s ease-in-out;
  text-align: center;
  &:hover {
    color: #fff;
    background: ${theme.colors.black};
  }
`;

export default theme;
