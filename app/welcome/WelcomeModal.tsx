'use client';
import React from 'react';
import {
  Box,
  Button,
  Input,
  Modal,
  Text,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

interface WelcomeModalProps {
  isOpen: boolean;
  currentSlide: number;
  handleUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleJobTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextSlide: () => void;
  handleSave: () => void;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  currentSlide,
  handleUserNameChange,
  handleJobTitleChange,
  handleNextSlide,
  handleSave,
  onClose,
}) => {
  interface SlideInfo {
    text?: string;
    button: string;
    action: () => void;
    input?: JSX.Element;
  }

  const slideData: Record<number, SlideInfo> = {
    1: {
      text: 'Unleash your Creativity with the power of Leonardo Ai',
      button: 'Get Started',
      action: handleNextSlide,
    },
    2: {
      button: 'Next',
      action: handleNextSlide,
      input: (
        <FormControl isRequired key="username">
          <FormLabel mb="2">Your Username</FormLabel>
          <Input
            bg="white"
            placeholder="Username"
            size="lg"
            onChange={handleUserNameChange}
          />
        </FormControl>
      ),
    },
    3: {
      button: 'Save',
      action: handleSave,
      input: (
        <FormControl key="jobTitle" isRequired>
          <FormLabel>Your Job Title</FormLabel>
          <Input
            placeholder="Job Title"
            size="lg"
            onChange={handleJobTitleChange}
          />
        </FormControl>
      ),
    },
  };

  const renderContent = () => {
    const { text, button, action, input } =
      slideData[currentSlide as keyof typeof slideData];
    return (
      <ModalBody>
        <Text fontSize="md" color="gray.600">
          {text}
        </Text>

        {input}

        <ModalFooter p="0" mt="8">
          <Button colorScheme="red" onClick={action} w="full">
            {button}
          </Button>
        </ModalFooter>
      </ModalBody>
    );
  };

  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        mx="4"
        bg="white"
        borderRadius="lg"
        p={8}
        boxShadow="lg"
        minHeight="350px"
      >
        <Box>
          <ModalHeader fontSize="4xl" textAlign="center">
            Welcome
          </ModalHeader>
          {renderContent()}
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
