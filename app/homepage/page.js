import React from 'react';
import TopicList from '@/components/topicList';
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/options';

const Homepage = async () => {

  const session = await getServerSession(options);

  if (!session) {
    redirect("api/auth/signin?callbackUrl=/homepage");
    return null; // Explicitly return null to prevent further rendering
  }

  return (
    <div>
      <TopicList />
    </div>
  );
};

export default Homepage;
