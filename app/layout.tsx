import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leonardo AI',
  description: 'A coding task for a frontend developer position',
  icons: {
    icon: ['/icon.ico'],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <Box as="html" lang="en">
    <Box as="body" className={inter.className}>
      <Providers>
        <Box
          bgGradient="linear(to-br, #667eea, #764ba2)"
          w="100vw"
          h="100vh"
          position="relative"
          overflow={{ base: 'auto', '2xl': 'hidden' }}
        >
          <Box
            position="absolute"
            w="200%"
            h="200%"
            bg="whiteAlpha.200"
            borderRadius="50%"
            top="-50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          <Box
            position="absolute"
            w="300%"
            h="300%"
            bg="whiteAlpha.100"
            borderRadius="50%"
            top="50%"
            left="-50%"
            transform="translate(-50%, -50%)"
          />

          {children}
        </Box>
      </Providers>
    </Box>
  </Box>
);

export default RootLayout;
