import { SimpleGrid, Heading, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import { fetchConferences } from '../routes/api/graphql';
import { Conference } from '@/src/generated/graphql';
import ConferenceCard from '../components/ConferenceCard';

export default async function InformationPage() {
  const { data } = await fetchConferences();
  console.log(data);
  const sortedConferences = data?.conferences
    .slice()
    .sort(
      (a: Conference, b: Conference) =>
        +new Date(a.startDate) - +new Date(b.startDate)
    );

  return (
    <>
      <Header />
      <Box px="4">
        <Heading as="h1" size="xl" pt={32} pb="6" color="white">
          React Finland Conferences
        </Heading>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          as="ul"
        >
          {sortedConferences?.map((conference: Conference) => (
            <ConferenceCard conference={conference} key={conference.id} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
