import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IconType } from 'react-icons';

interface Property extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  errorMessage: string | undefined;
  LeftIcon: IconType;
}

function AuthInput({
  errorMessage,
  register,
  placeholder,
  LeftIcon,
  type,
}: Property) {
  return (
    <Box w='full'>
      <InputGroup>
        <InputLeftElement color='gray.400'>
          <LeftIcon />
        </InputLeftElement>
        <Input
          placeholder={placeholder}
          type={type}
          autoComplete='off'
          {...register}
        />
      </InputGroup>
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            className='text-xs text-red-500 ml-2 mt-2'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default AuthInput;
