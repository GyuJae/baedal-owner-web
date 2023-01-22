import { Box, Button, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { RiKakaoTalkFill, SiNaver } from '@public/icon';
import React from 'react';

function SocialAuth() {
  return (
    <Box w='100%'>
      <HStack pt={3} pb={6}>
        <Divider />
        <Text color='gray.500' fontSize='xs' as='b'>
          OR
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          type='button'
          colorScheme='green'
          w='100%'
          leftIcon={<SiNaver />}
        >
          네이버 로그인
        </Button>
        <Button
          type='button'
          colorScheme='yellow'
          w='100%'
          leftIcon={<RiKakaoTalkFill />}
        >
          카카오 로그인
        </Button>
      </VStack>
    </Box>
  );
}

export default SocialAuth;
