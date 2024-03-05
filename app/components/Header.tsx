'use client';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowRightFromBracket, FaUser } from 'react-icons/fa6';
import {
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Tooltip,
} from '@chakra-ui/react';
import { signOutUser } from '@/utils/userUtils';

export const Header: React.FC = () => {
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
      <Tooltip label="User Settings" aria-label="Edit User Settings">
        <Link as={NextLink} href="/userSettings" replace>
          <IconButton
            icon={<FaUser />}
            variant="solid"
            aria-label="User Settings"
            isRound
            colorScheme="purple"
            ml={2}
          />
        </Link>
      </Tooltip>
      <Tooltip label="Sign Out" aria-label="Sign Out">
        <IconButton
          icon={<FaArrowRightFromBracket />}
          variant="solid"
          aria-label="Sign Out"
          isRound
          colorScheme="purple"
          ml={2}
          onClick={handleSignOut}
        />
      </Tooltip>
    </Flex>
  );
};
