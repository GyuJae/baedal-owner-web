import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { FaLock, FaUserAlt, GiStorkDelivery } from '@public/icon';
import React from 'react';

import SocialAuth from '../SocialAuth';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: Props) {
  return (
    <Modal motionPreset='slideInBottom' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display='flex' justifyContent='center'>
          <GiStorkDelivery size={45} />
        </ModalHeader>
        <ModalBody>
          <form>
            <VStack>
              <InputGroup>
                <InputLeftElement>
                  <Box color='gray.500'>
                    <FaUserAlt />
                  </Box>
                </InputLeftElement>
                <Input variant='filled' placeholder='이메일' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <Box color='gray.500'>
                    <FaLock />
                  </Box>
                </InputLeftElement>
                <Input variant='filled' placeholder='패스워드' />
              </InputGroup>
            </VStack>
            <Button type='submit' mt={5} colorScheme='blue' w='100%'>
              로그인
            </Button>
          </form>
        </ModalBody>
        <ModalFooter justifyContent='center'>
          <SocialAuth />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
