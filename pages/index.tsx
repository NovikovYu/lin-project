import Head from 'next/head';
import * as React from 'react';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Layout
      pageTitle={'Lintu - main page'}
      pageDescription={'Home Page of Lintu progect'}
      pageKeywords={'Lintu, investments, finance, shares'}
    >
      <main>
        {isMatchLg && <Container maxWidth="lg"></Container>}
        <Container maxWidth="sm"></Container>
      </main>
    </Layout>
  );
}
