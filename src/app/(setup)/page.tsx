import { redirect } from 'next/navigation';

import { InitialModal } from '@/common/components/modals/initial-modal';
import { db } from '@/common/libs/db';
import { initialProfile } from '@/common/libs/initial-profile';

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
