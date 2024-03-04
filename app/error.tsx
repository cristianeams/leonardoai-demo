'use client'; // Error components must be Client Components
import {
  AbsoluteCenter,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <AbsoluteCenter>
      <Alert
        rounded="xl"
        boxShadow="lg"
        status="error"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Oops, there was an error.
        </AlertTitle>
        <AlertDescription maxWidth="sm">{error.message}</AlertDescription>
      </Alert>
    </AbsoluteCenter>
  );
}
