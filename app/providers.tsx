'use client';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { apolloClient } from './routes/api/graphql';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ChakraProvider>
  );
}
