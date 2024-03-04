import { Flex, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Flex
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      m="auto"
    >
      <Spinner size="xl" color="whiteAlpha.900" />
    </Flex>
  );
}
