'use client';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Heading,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import { Conference } from '@/src/generated/graphql';
import ConferenceDetailsModal from './ConferenceDetailsModal';

interface ConferenceCardProps {
  conference: Conference;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ conference }) => {
  const { name, slogan, series } = conference;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleViewDetails = () => {
    onOpen();
  };

  return (
    <>
      <Card
        variant="outline"
        as="li"
        bg="whiteAlpha.900"
        _hover={{
          outline: '4px solid',
          outlineColor: 'purple.600',
        }}
      >
        <CardHeader>
          <Badge variant="subtle" borderRadius="full" colorScheme="purple">
            {series.name}
          </Badge>
          <Heading size="md" minH="56px" pt="2">
            {name}
          </Heading>
        </CardHeader>
        <CardBody pt="0">
          <Text fontSize="sm">{slogan}</Text>
        </CardBody>
        <CardFooter pt="0">
          <Button
            colorScheme="red"
            size="sm"
            w="full"
            onClick={handleViewDetails}
          >
            View More Details
          </Button>
        </CardFooter>
      </Card>
      <ConferenceDetailsModal
        conference={conference}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ConferenceCard;
