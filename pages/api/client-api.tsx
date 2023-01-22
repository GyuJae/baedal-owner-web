import { FC } from 'react';
import {
  cacheExchange,
  createClient,
  errorExchange,
  fetchExchange,
  Provider,
  ssrExchange,
} from 'urql';

import { isAuthError } from './shared';

declare global {
  interface Window {
    __URQL_DATA__: any;
  }
}

const isClient = typeof window !== 'undefined';

const ssrCache = ssrExchange({
  isClient,
  // eslint-disable-next-line no-underscore-dangle
  initialState: isClient ? window.__URQL_DATA__ : undefined,
});

const clientApi = createClient({
  url: 'http://localhost:7001/graphql',
  fetchOptions: { credentials: 'include' },
  suspense: true,
  exchanges: [
    cacheExchange,
    ssrCache,
    errorExchange({
      onError: (error) => {
        if (isAuthError(error)) {
          // todo
        }
      },
    }),
    fetchExchange,
  ],
});

const withApi = (Component: FC) =>
  function ApiWrappedComponent({ ...properties }) {
    if (properties.urqlState) {
      ssrCache.restoreData(properties.urqlState);
    }

    return (
      <Provider value={clientApi}>
        <Component {...properties} />
      </Provider>
    );
  };

export default withApi;
