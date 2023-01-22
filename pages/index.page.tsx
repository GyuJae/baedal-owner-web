import withApi from './api/client-api';

function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2' />
  );
}

export default withApi(Home);
