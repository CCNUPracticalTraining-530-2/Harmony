import { NextPage } from 'next';

import Channels from '@/modules/Channels';

interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  };
}

const Page: NextPage<ChannelIdPageProps> = ({ params }) => {
  return (
    <>
      <Channels serverId={params.serverId} channelId={params.channelId} />
    </>
  );
};

export default Page;
