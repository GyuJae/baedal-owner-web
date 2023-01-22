import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdEmail, RiLockPasswordFill } from '@public/icon';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useLogin from '../hooks/use-login.gql';

interface Form {
  email: string;
  password: string;
}

const LoginSchema = z.object({
  email: z.string().email({
    message: '올바른 이메일 형식이 아닙니다.',
  }),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상입니다.')
    .max(30, '비밀번호는 최대 30자 이하입니다.'),
});

function LoginForm() {
  const toast = useToast();
  const router = useRouter();
  const [{ fetching }, login] = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Form>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });

  async function onSubmit(input: Form) {
    const { error, data } = await login({ input });
    if (error) {
      toast({
        title: '올바른 계정이 아닙니다.',
        position: 'top',
        status: 'error',
        duration: 1000,
      });
      return;
    }

    if (data && data.result.ok) {
      router.replace('/');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={3}>
        <Box w='full'>
          <InputGroup>
            <InputLeftElement color='gray.400'>
              <MdEmail />
            </InputLeftElement>
            <Input placeholder='이메일' {...register('email')} />
          </InputGroup>
          {errors.email && (
            <Text color='red' p='1.5'>
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box w='full'>
          <InputGroup>
            <InputLeftElement color='gray.400'>
              <RiLockPasswordFill />
            </InputLeftElement>
            <Input
              placeholder='패스워드'
              type='password'
              {...register('password')}
            />
          </InputGroup>
          {errors.password && (
            <Text color='red' p='1.5'>
              {errors.password.message}
            </Text>
          )}
        </Box>
        <Button
          type='submit'
          isLoading={fetching}
          w='full'
          colorScheme='blue'
          disabled={!isValid}
          variant='solid'
        >
          로그인
        </Button>
      </VStack>
    </form>
  );
}

export default LoginForm;
