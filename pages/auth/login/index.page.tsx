import { Center, Container } from '@chakra-ui/react';
import withApi from 'pages/api/client-api';
import React from 'react';

import Line from './Line';
import LoginForm from './LoginForm';
import Other from './Other';
import SocialLogin from './SocialLogin';

function Login() {
  return (
    <Center
      p={{
        base: 4,
        sm: 5,
      }}
    >
      <Container>
        <LoginForm />
        <Line />
        <SocialLogin />
        <Other />
      </Container>
    </Center>
  );
}

export default withApi(Login);
