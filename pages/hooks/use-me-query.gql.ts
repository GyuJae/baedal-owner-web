import { gql, useQuery } from 'urql';

export const WHO_AM_I_QUERY = gql`
  query ME {
    result: whoAmI {
      user {
        name
        id
      }
    }
  }
`;

export const useMe = () =>
  useQuery({
    query: WHO_AM_I_QUERY,
  });
