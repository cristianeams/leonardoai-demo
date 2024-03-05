'use client';
// This file exports the Providers component that wraps the main application with ChakraProvider and ApolloProvider.
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { apolloClient } from './routes/api/graphql';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ChakraProvider>
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  </ChakraProvider>
);
