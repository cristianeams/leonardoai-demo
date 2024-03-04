import { Conference } from '@/src/generated/graphql';
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';

type OrganizersListProps = Pick<Conference, 'organizers'>;

const OrganizersList: React.FC<OrganizersListProps> = ({ organizers }) => {
  return (
    <Wrap as="ul">
      {organizers?.map((organizer) => (
        <WrapItem as="li" key={organizer.name}>
          <Avatar name={organizer.name} src={organizer.image.url} />
        </WrapItem>
      ))}
    </Wrap>
  );
};
export default OrganizersList;
