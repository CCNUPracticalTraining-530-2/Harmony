import { NextPage } from 'next';

import SetUp from '@/modules/SetUp';

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const Page: NextPage<InviteCodePageProps> = ({ params }) => {
  return (
    <>
      <SetUp />
    </>
  );
};

export default Page;
