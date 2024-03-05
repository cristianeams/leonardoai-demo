'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { getUserInfo } from '@/utils/userUtils';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
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
    }
  }, [router]);
  // Empty JSX element is used for the side effect of redirecting the user.
  return <></>;
}
