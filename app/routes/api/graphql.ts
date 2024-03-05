import { ApolloClient, ApolloError, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
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

type ApolloErrorOrUndefined = ApolloError | undefined;

export const fetchConferences = async () => {
  try {
    const response = await apolloClient.query({
      query: ALL_CONFERENCES,
    });

    const data = response.data;
    return {
      data,
      loading: false,
      error: undefined as ApolloErrorOrUndefined,
    };
  } catch (error) {
    // Use the actual error object if it's an ApolloError
    const actualError: ApolloErrorOrUndefined =
      error instanceof ApolloError ? error : undefined;

    return {
      data: null,
      loading: false,
      error: actualError,
    };
  }
};
