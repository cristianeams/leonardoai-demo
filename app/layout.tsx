import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Box, Container } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leonardo AI',
  description: 'A coding task for a frontend developer position',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box as="html" lang="en">
      <Box as="body" className={inter.className}>
        <Providers>
          <Container minH="100vh" maxW="container.xl">
            {children}
          </Container>
        </Providers>
      </Box>
    </Box>
  );
}
