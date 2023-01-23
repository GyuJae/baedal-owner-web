import { DocumentNode } from 'graphql';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import {
  createClient,
  fetchExchange,
  ssrExchange,
  TypedDocumentNode,
} from 'urql';

import { isAuthError } from './shared';

type SsrResult = GetServerSidePropsResult<{ urqlState?: any }>;
type SsrQuery<D, V> = DocumentNode | TypedDocumentNode<D, V> | string;
type SsrContext = GetServerSidePropsContext;

async function serverQuery<
  QueryResult = { [key: string]: unknown },
  Variables extends { [prop: string]: any } = { [key: string]: unknown }
>(
  query: SsrQuery<QueryResult, Variables>,
  variables: Variables,
  context: SsrContext
): Promise<SsrResult> {
  const ssrCache = ssrExchange({ isClient: false });
  const cookie = context?.req.headers.cookie as string;
  const serverClient = createClient({
    url: 'http://localhost:7001/graphql',
    fetchOptions: { headers: { cookie } },
    exchanges: [ssrCache, fetchExchange],
  });

  const { error } = await serverClient
    .query<SsrQuery<QueryResult, Variables>, Variables>(query, variables)
    .toPromise();

  if (!error) return { props: { urqlState: ssrCache.extractData() } };

  if (isAuthError(error)) {
    context.res.setHeader('set-cookie', ['token=']);
    context.res.setHeader('set-cookie', ['token-expires=']);
    return { redirect: { permanent: false, destination: '/auth/login' } };
  }

  return { redirect: { permanent: false, destination: '/error' } };
}

export default serverQuery;
