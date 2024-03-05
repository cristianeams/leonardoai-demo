'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, VStack, Input } from '@chakra-ui/react';
import { getUserInfo, setUserInfo } from '@/utils/userUtils';

export const EditableUserSettings: React.FC = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');

  useEffect(() => {
    const { userName, jobTitle } = getUserInfo();
    setUserName(userName);
    setJobTitle(jobTitle);
  }, []);

  const handleSave = () => {
    // Update local storage
    setUserInfo({ userName, jobTitle });
    setUserName(userName);
    setJobTitle(jobTitle);
    router.replace('/information');
  };

  return (
    <>
      <VStack
        bg="white"
        borderRadius="lg"
        p={8}
        boxShadow="lg"
        spacing="4"
        align="flex-start"
      >
        <Input
          placeholder="UserName"
          size="lg"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          maxW="500px"
        />

        <Input
          maxW="500px"
          placeholder="Job Title"
          size="lg"
          onChange={(e) => setJobTitle(e.target.value)}
          value={jobTitle}
        />
        <Button
          colorScheme="red"
          onClick={handleSave}
          w={{ base: 'full' }}
          maxW="500px"
          isDisabled={!userName || !jobTitle}
        >
          Save
        </Button>
      </VStack>
    </>
  );
};
