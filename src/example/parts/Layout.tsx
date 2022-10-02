import React from 'react';
import { Header } from '../../components/ui/Header/Header';
import { css } from '@emotion/css';
import { theme, useTheme } from '../../theme';
import { Box, Container } from '../../components';
import { Logo } from '../../components/icons';

const main = css`
  margin-top: ${theme.spacing(3)};
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box minWidth={theme.breakpoints.values['md']} overflow="auto">
      <Header>
        <Logo />
      </Header>
      <Container className={main} as="main">
        {children}
      </Container>
    </Box>
  );
};
