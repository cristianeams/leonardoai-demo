import { Conference } from '@/src/generated/graphql';
import { formattedDate } from '@/utils/dateFormatter';
import {
  Badge,
  Box,
  Button,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Speakers from './Speakers';

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
  const {
    name,
    slogan,
    websiteUrl,
    startDate,
    endDate,
    speakers,
    organizers,
    series,
  } = conference;
  const organizersList = organizers
    .map((organizer) => organizer.name)
    .join(', ');
  organizersList;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="2xl" color="purple.600">
            <Link href={websiteUrl} isExternal>
              {name}
            </Link>
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
          {organizersList && (
            <Text fontSize="xs">Organizers: {organizersList}</Text>
          )}
          <Text py="4">Topic: {slogan}</Text>
          <Divider my="4" />

          <Speakers speakers={speakers} />
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
