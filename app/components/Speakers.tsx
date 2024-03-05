import { Conference } from '@/src/generated/graphql';
import {
  Avatar,
  Text,
  Box,
  Link,
  Icon,
  Flex,
  Divider,
  ListItem,
  List,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

type SpeakersProps = Pick<Conference, 'speakers'>;

export const Speakers: React.FC<SpeakersProps> = ({ speakers }) => {
  return (
    <List display="flex" flexDirection="column">
      {speakers?.map((speaker) => (
        <ListItem key={speaker.name} flexDirection="column" gap="4">
          <Flex dir="column" align="center" pb="4">
            <Avatar name={speaker.name} src={speaker.image.url} />
            <Box ml="3">
              <Text fontWeight="bold">{speaker.name}</Text>
              {speaker.social.github && (
                <Link
                  href={speaker.social.github}
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="gray.500"
                  fontSize="xs"
                >
                  <Icon as={FaGithub} mr="2" />
                  {speaker.social.github}
                </Link>
              )}
            </Box>
          </Flex>
          <Text fontSize="xs">{speaker.about}</Text>
          <Divider my="4" />
        </ListItem>
      ))}
    </List>
  );
};
