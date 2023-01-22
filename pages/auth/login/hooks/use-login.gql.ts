import { ResultOutput } from 'pages/api/shared';
import { gql, useMutation } from 'urql';

interface Output {
  ok: boolean;
  error: string | null;
}

interface Variables {
  input: {
    email: string;
    password: string;
  };
}

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    result: login(input: $input) {
      ok
      error
    }
  }
`;

const useLogin = () =>
  useMutation<ResultOutput<Output>, Variables>(LOGIN_MUTATION);

export default useLogin;
