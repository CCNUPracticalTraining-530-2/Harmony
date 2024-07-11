import { NextPage } from 'next';

import Invite from '@/modules/Invite';

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const Page: NextPage<InviteCodePageProps> = ({ params }) => {
  return (
    <>
      <Invite inviteCode={params.inviteCode} />
    </>
  );
};

export default Page;
