import { gql, useQuery } from 'urql';

const FIND_RESTAURANTS_QUERY = gql`
  query FindRestaurants($input: FindRestaurantsInput!) {
    result: findRestaurants(input: $input) {
      restaurants {
        name
      }
    }
  }
`;

const useRestaurantsQuery = () =>
  useQuery({
    query: FIND_RESTAURANTS_QUERY,
    variables: {
      input: {},
    },
  });

export default useRestaurantsQuery;
