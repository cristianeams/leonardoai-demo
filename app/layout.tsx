import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Box } from '@chakra-ui/react';

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
          <Box
            bgGradient="linear(to-br, #667eea, #764ba2)"
            w="100vw"
            h="100vh"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              w="200%"
              h="200%"
              bg="whiteAlpha.200"
              style={{
                borderRadius: '50%',
              }}
              top="-50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
            <Box
              position="absolute"
              w="300%"
              h="300%"
              bg="whiteAlpha.100"
              style={{
                borderRadius: '50%',
              }}
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
}
