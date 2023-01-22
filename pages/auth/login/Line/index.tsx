import { Divider, HStack, Text } from '@chakra-ui/react';
import React from 'react';

function Line() {
  return (
    <HStack w='full' alignItems='center' my='6'>
      <Divider />
      <Text fontSize='xs' as='b' color='gray.500'>
        OR
      </Text>
      <Divider />
    </HStack>
  );
}

export default Line;
