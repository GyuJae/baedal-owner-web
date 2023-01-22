import '../styles/globals.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
