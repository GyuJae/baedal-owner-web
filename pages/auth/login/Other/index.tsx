import { Button, Center, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

function Other() {
  const router = useRouter();

  const onClickPushSignUp = () => router.push('/auth/sign-up');
  return (
    <Center py='8'>
      <HStack>
        <Button
          type='button'
          onClick={onClickPushSignUp}
          variant='ghost'
          size='xs'
        >
          회원가입
        </Button>
        <Button variant='ghost' size='xs'>
          계정 찾기
        </Button>
      </HStack>
    </Center>
  );
}

export default Other;
