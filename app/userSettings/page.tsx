'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Heading } from '@chakra-ui/react';
import { getUserInfo } from '@/utils/userUtils';
import { Header } from '../components';
import { EditableUserSettings } from '../components/EditableUserSettings';
import Loading from '../loading';

export default function SettingsPage() {
  const router = useRouter();
  const { userName } = getUserInfo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userName) {
      setLoading(false);
      router.push('/welcome');
    } else {
      setLoading(false);
    }
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
              Manage your account
            </Heading>
            <EditableUserSettings />
          </Box>
        </>
      )}
    </>
  );
}
