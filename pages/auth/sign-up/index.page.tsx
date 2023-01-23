import { Center, Container } from '@chakra-ui/react';
import React from 'react';

import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <Center
      p={{
        base: 4,
        sm: 5,
      }}
    >
      <Container>
        <SignUpForm />
      </Container>
    </Center>
  );
}

export default SignUp;
