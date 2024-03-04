import { Conference } from '@/src/generated/graphql';
import { formattedDate } from '@/utils/dateFormatter';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import OrganizersList from './OrganizersList';

interface ConferenceDetailsModalProps {
  conference: Conference;
  isOpen: boolean;
  onClose: () => void;
}

const ConferenceDetailsModal: React.FC<ConferenceDetailsModalProps> = ({
  conference,
  isOpen,
  onClose,
}) => {
  const { name, slogan, startDate, endDate, organizers, series } = conference;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="2xl" color="purple.600">
            {name}
          </Text>
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" alignItems="baseline" pb="4">
            <Badge variant="subtle" borderRadius="full" colorScheme="purple">
              {series.name}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {formattedDate(startDate)} - {formattedDate(endDate)}
            </Box>
          </Box>
          <Divider my="4" />
          <Text pb="4">{slogan}</Text>
          <OrganizersList organizers={organizers} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ConferenceDetailsModal;
