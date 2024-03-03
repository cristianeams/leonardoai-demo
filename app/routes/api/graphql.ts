import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
  cache: new InMemoryCache(),
});

export const ALL_CONFERENCES = gql`
  {
    conferences {
      id
      year
      name
    }
  }
`;

export const fetchConferences = async () => {
  try {
    const response = await apolloClient.query({
      query: ALL_CONFERENCES,
    });

    const data = response.data;
    console.log('GraphQL Data:', data);

    return {
      data,
      loading: false,
      error: null,
    };
    console.log(data);
  } catch (error) {
    console.error('GraphQL Error:', error);

    return {
      data: null,
      loading: false,
      error,
    };
  }
};
