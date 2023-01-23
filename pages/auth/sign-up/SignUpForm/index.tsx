import { Button, VStack } from '@chakra-ui/react';
import AuthInput from '@components/AuthInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaUserAlt, MdEmail, RiLockPasswordFill } from '@public/icon';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SignUpSchema = z.object({
  email: z.string().email({
    message: '올바른 이메일 형식이 아닙니다.',
  }),
  name: z.string().max(30, '이름은 최대 30자 이하입니다.'),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상입니다.')
    .max(30, '비밀번호는 최대 30자 이하입니다.'),
});

type Form = z.infer<typeof SignUpSchema>;

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Form>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange',
  });

  async function onSubmit(input: Form) {
    console.log(input);
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
          register={register('name')}
          placeholder='이름'
          LeftIcon={FaUserAlt}
          errorMessage={errors.name?.message}
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
          // isLoading={fetching}
          w='full'
          colorScheme='blue'
          disabled={!isValid}
          variant='solid'
        >
          계정 생성하기
        </Button>
      </VStack>
    </form>
  );
}

export default SignUpForm;
