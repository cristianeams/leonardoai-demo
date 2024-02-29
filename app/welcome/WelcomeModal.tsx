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
  FormErrorMessage,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

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
  return (
    <Modal
      isOpen={isOpen}
      size="xl"
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent mx="4">
        <ModalHeader fontSize="4xl">Welcome</ModalHeader>
        <ModalBody>
          {currentSlide === 1 && (
            <Text>Unleash your Creativity with the power of Leonardo Ai</Text>
          )}
          {currentSlide === 2 && (
            <FormControl isRequired>
              <FormLabel>Your Username</FormLabel>
              <Input
                placeholder="Username"
                size="lg"
                onChange={handleUserNameChange}
              />
            </FormControl>
          )}

          {currentSlide === 3 && (
            <FormControl>
              <FormLabel>Your Job Title</FormLabel>
              <Input
                placeholder="Job Title"
                size="lg"
                onChange={handleJobTitleChange}
              />
            </FormControl>
          )}
        </ModalBody>
        <ModalFooter>
          <Box p={4} textAlign="right">
            {currentSlide === 1 && (
              <Button
                colorScheme="blue"
                onClick={handleNextSlide}
                rightIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
            )}
            {currentSlide === 2 && (
              <Button colorScheme="blue" onClick={handleNextSlide}>
                Next
              </Button>
            )}

            {currentSlide === 3 && (
              <Button colorScheme="blue" onClick={handleSave}>
                Save
              </Button>
            )}
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
