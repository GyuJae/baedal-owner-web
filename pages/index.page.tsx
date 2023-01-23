import { GetServerSidePropsContext } from 'next';

import withApi from './api/client-api';
import serverQuery from './api/server-api';
import { useMe, WHO_AM_I_QUERY } from './hooks/use-me-query.gql';

export const getServerSideProps = (context: GetServerSidePropsContext) =>
  serverQuery(WHO_AM_I_QUERY, {}, context);

function Home() {
  const [{ data }] = useMe();
  console.log(data);
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2' />
  );
}

export default withApi(Home);
