'use client';
import NextLink from 'next/link';
import { signOutUser } from '@/utils/userUtils';
import { Flex, Heading, IconButton, Link, Spacer } from '@chakra-ui/react';
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
      position="fixed"
      top="0"
      zIndex="banner"
    >
      <Link as={NextLink} href="/information" replace>
        <Heading as="h3" size="lg" color="purple.600" letterSpacing="tight">
          Dashboard
        </Heading>
      </Link>

      <Spacer />
      <Link as={NextLink} href="/userSettings" replace>
        <IconButton
          icon={<FaUser />}
          variant="ghost"
          aria-label="User Account"
          isRound
          color="purple.600"
          ml={2}
        />
      </Link>
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
