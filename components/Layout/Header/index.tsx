import {
  Box,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun, GiStorkDelivery } from '@public/icon';
import React from 'react';

function Header() {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(FaMoon, FaSun);

  return (
    <header>
      <HStack
        px={10}
        py={5}
        borderBottomWidth={2.5}
        justifyContent='space-between'
      >
        <Box>
          <GiStorkDelivery size={45} />
        </Box>
        <HStack>
          <IconButton
            type='button'
            onClick={toggleColorMode}
            aria-label='toggle dark mode'
            icon={<Icon />}
            variant='ghost'
          />
        </HStack>
      </HStack>
    </header>
  );
}

export default Header;
