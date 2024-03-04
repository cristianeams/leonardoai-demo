'use client';
import { getUserInfo } from '@/utils/userUtils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkUserInformation = () => {
      const { userName, jobTitle } = getUserInfo();
      if (userName && jobTitle) {
        // User is logged in, redirect to the information page
        router.push('/information');
      } else {
        router.push('/welcome');
      }
    };
    checkUserInformation();
  }, [router]);
  return <></>;
}
