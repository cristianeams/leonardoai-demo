'use client';
import { SimpleGrid, Heading, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import { fetchConferences } from '../routes/api/graphql';
import { Conference } from '@/src/generated/graphql';
import ConferenceCard from '../components/ConferenceCard';
import { useEffect, useState } from 'react';
import { getUserInfo } from '@/utils/userUtils';
import { useRouter } from 'next/navigation';
import Loading from '../loading';

export default function InformationPage() {
  const [conferences, setConferences] = useState<Conference[] | null>(null);
  const router = useRouter();
  const { userName } = getUserInfo();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userName) {
      setLoading(false);
      router.push('/welcome');
    }
    setLoading(false);
  }, [userName, router]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchConferences();
      const sortedConferences = data?.conferences
        .slice()
        .sort(
          (a: Conference, b: Conference) =>
            +new Date(a.startDate) - +new Date(b.startDate)
        );
      setConferences(sortedConferences);
    };

    fetchData();
  }, []);

  const sortedConferences = conferences
    ?.slice()
    .sort(
      (a: Conference, b: Conference) =>
        +new Date(a.startDate) - +new Date(b.startDate)
    );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Box px="4" pt="16">
            <Heading as="h1" size="xl" py="6" color="white">
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
      )}
    </>
  );
}
