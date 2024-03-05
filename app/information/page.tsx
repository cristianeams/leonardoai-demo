'use client';
import { useEffect, useState } from 'react';
import { SimpleGrid, Heading, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Conference } from '@/src/generated/graphql';
import { getUserInfo } from '@/utils/userUtils';
import { fetchConferences } from '../routes/api/graphql';
import { ConferenceCard, Header } from '../components';
import Loading from '../loading';

export default function InformationPage() {
  const [conferences, setConferences] = useState<Conference[] | null>(null);
  const router = useRouter();
  const { userName } = getUserInfo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userName) {
          setLoading(false);
          router.push('/welcome');
          return;
        }

        const { data } = await fetchConferences();
        const sortedConferences = data?.conferences
          ?.slice()
          .sort(
            (a: Conference, b: Conference) =>
              +new Date(a.startDate) - +new Date(b.startDate)
          );

        setConferences(sortedConferences);
      } catch (error) {
        console.error('Error fetching conferences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userName, router]);

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
              {conferences?.map((conference: Conference) => (
                <ConferenceCard conference={conference} key={conference.id} />
              ))}
            </SimpleGrid>
          </Box>
        </>
      )}
    </>
  );
}
