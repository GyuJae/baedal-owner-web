import { Button, VStack } from '@chakra-ui/react';
import { FaComment, SiNaver } from '@public/icon';
import React from 'react';

function SocialLogin() {
  return (
    <VStack>
      <Button leftIcon={<FaComment />} colorScheme='yellow' w='full'>
        카카오 로그인
      </Button>
      <Button leftIcon={<SiNaver />} colorScheme='green' w='full'>
        네이버 로그인
      </Button>
    </VStack>
  );
}

export default SocialLogin;
