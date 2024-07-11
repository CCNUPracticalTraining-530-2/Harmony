import { redirectToSignIn } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { currentProfile } from '@/common/libs/current-profile';
import { db } from '@/common/libs/db';

interface ServerProps {
  serverId: string;
}

const Servers: React.FC<ServerProps> = async ({ serverId }) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: '一般频道',
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  });

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== '一般频道') {
    return null;
  }

  return redirect(`/servers/${serverId}/channels/${initialChannel?.id}`);
};

export default Servers;
