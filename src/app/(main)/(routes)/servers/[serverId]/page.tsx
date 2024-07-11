import { NextPage } from 'next';

import Servers from '@/modules/Servers';

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const Page: NextPage<ServerIdPageProps> = ({ params }) => {
  return (
    <>
      <Servers serverId={params.serverId} />
    </>
  );
};

export default Page;
