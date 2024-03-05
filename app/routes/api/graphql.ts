import { ApolloClient, ApolloError, InMemoryCache, gql } from '@apollo/client';

const API_URL = 'https://api.react-finland.fi/graphql';
export const apolloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export const ALL_CONFERENCES = gql`
  {
    conferences {
      id
      name
      startDate
      endDate
      slogan
      series {
        name
      }
      websiteUrl
      organizers {
        name
      }
      speakers {
        name
        about
        image {
          url
        }
        social {
          github
        }
      }
    }
  }
`;

export const fetchConferences = async () => {
  try {
    const response = await apolloClient.query({
      query: ALL_CONFERENCES,
    });

    const data = response.data;
    return {
      data,
      loading: false,
      error: null as ApolloError | null, // Assert type as ApolloError | null
    };
  } catch (error) {
    // Create a new Error object with the actual error message
    const errorMessage =
      error instanceof ApolloError
        ? error.message
        : 'An unknown error has ocurred.';

    return {
      data: null,
      loading: false,
      error: new Error(errorMessage),
    };
  }
};
