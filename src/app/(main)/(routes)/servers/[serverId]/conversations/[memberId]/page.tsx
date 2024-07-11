import { NextPage } from 'next';

import Conversations from '@/modules/Conversations';

interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  };
  searchParams: {
    video?: boolean;
  };
}

const Page: NextPage<MemberIdPageProps> = ({ params, searchParams }) => {
  return (
    <>
      <Conversations
        memberId={params.memberId}
        serverId={params.serverId}
        video={searchParams.video}
      />
    </>
  );
};

export default Page;
