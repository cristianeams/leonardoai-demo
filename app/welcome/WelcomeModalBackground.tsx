'use client';
import {
  Box,
  Button,
  Circle,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
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
    // Save user information to localStorage on the client side
    localStorage.setItem('userName', userName);
    localStorage.setItem('jobTitle', jobTitle);
    onClose(); // Close the modal
    router.push('/information');
  };
  return (
    <div>
      <Flex
        height="100vh"
        width="100vw"
        position="fixed"
        top="0"
        left="0"
        alignItems="center"
        justifyContent="center"
        direction="column"
        background="linear-gradient(135deg, hsl(214.28571428571428, 31.818181818181824%, 91.37254901960785%) 25%, #CBD5E0 100%)"
      >
        <Circle size="300px" bg="white" opacity="0.2" mb={4} />
        <Circle size="200px" bg="white" opacity="0.4" />
        <Box
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          p={4}
          color="gray.600"
          textAlign="center"
        >
          <Text fontSize="sm">Enjoy your stay</Text>
          {!isOpen && (
            <Button colorScheme="blue" onClick={onOpen} mt="2">
              Try us again
            </Button>
          )}
        </Box>
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
