'use client';
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import WelcomeModal from './WelcomeModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomeModalBackground() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [userName, setUserName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUserName(newUsername);
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newJobTitle = e.target.value;
    setJobTitle(newJobTitle);
  };

  const handleNextSlide = () => {
    if (currentSlide == 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide == 2 && userName) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSave = () => {
    if (userName && jobTitle) {
      // Save user information to localStorage on the client side
      localStorage.setItem('userName', userName);
      localStorage.setItem('jobTitle', jobTitle);
      onClose();
      router.push('/information');
    }
  };

  return (
    <div>
      <Flex
        direction="column"
        align="center"
        position="absolute"
        bottom="30%"
        left="0"
        width="100%"
        p={4}
        gap="6"
      >
        <Text
          w="full"
          textAlign="center"
          color="white"
          fontSize="xl"
          fontWeight="semibold"
        >
          Explore the new features and insights.
        </Text>
        {!isOpen && (
          <Button colorScheme="red" onClick={onOpen} mt="2">
            Explore Now
          </Button>
        )}
      </Flex>

      <WelcomeModal
        isOpen={isOpen}
        currentSlide={currentSlide}
        handleUserNameChange={handleUserNameChange}
        handleJobTitleChange={handleJobTitleChange}
        handleNextSlide={handleNextSlide}
        handleSave={handleSave}
        onClose={onClose}
      />
    </div>
  );
}
