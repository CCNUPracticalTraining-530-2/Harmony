import { redirectToSignIn } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { currentProfile } from '@/common/libs/current-profile';
import { db } from '@/common/libs/db';

interface InviteProps {
  inviteCode: string;
}

const Invite: React.FC<InviteProps> = async ({ inviteCode }) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!inviteCode) {
    return redirect('/');
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  const server = await db.server.update({
    where: {
      inviteCode: inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return null;
};

export default Invite;
