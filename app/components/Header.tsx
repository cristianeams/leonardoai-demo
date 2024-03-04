'use client';
import { signOutUser } from '@/utils/userUtils';
import { Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaArrowRightFromBracket, FaUser } from 'react-icons/fa6';

export default function Header() {
  const router = useRouter();
  const handleSignOut = () => {
    // Call the signOutUser function to clear user information from local storage
    signOutUser();
    router.push('/welcome');
  };
  return (
    <Flex
      as="nav"
      role="navigation"
      w="100%"
      px={4}
      py={3}
      bg="whiteAlpha.900"
      align="center"
      position="absolute"
      zIndex="banner"
    >
      <Heading as="h3" size="lg" color="purple.600" letterSpacing="tight">
        Dashboard
      </Heading>
      <Spacer />
      <IconButton
        icon={<FaUser />}
        variant="ghost"
        aria-label="User Account"
        isRound
        color="purple.600"
        ml={2}
      />
      <IconButton
        icon={<FaArrowRightFromBracket />}
        variant="ghost"
        aria-label="Sign Out"
        isRound
        color="purple.600"
        ml={2}
        onClick={handleSignOut}
      />
    </Flex>
  );
}
