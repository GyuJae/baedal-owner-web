import { Button, useToast, VStack } from '@chakra-ui/react';
import AuthInput from '@components/AuthInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdEmail, RiLockPasswordFill } from '@public/icon';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useLogin from '../hooks/use-login.gql';

const LoginSchema = z.object({
  email: z.string().email({
    message: '올바른 이메일 형식이 아닙니다.',
  }),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상입니다.')
    .max(30, '비밀번호는 최대 30자 이하입니다.'),
});

type Form = z.infer<typeof LoginSchema>;

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
      <VStack spacing={2}>
        <AuthInput
          register={register('email')}
          placeholder='이메일'
          LeftIcon={MdEmail}
          errorMessage={errors.email?.message}
        />
        <AuthInput
          register={register('password')}
          placeholder='패스워드'
          LeftIcon={RiLockPasswordFill}
          errorMessage={errors.password?.message}
          type='password'
        />

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
