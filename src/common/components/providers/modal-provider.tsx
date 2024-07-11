'use client';

import { useEffect, useState } from 'react';

import { CreateChannelModal } from '@/common/components/modals/create-channel-modal';
import { CreateServerModal } from '@/common/components/modals/create-server-modal';
import { DeleteChannelModal } from '@/common/components/modals/delete-channel-modal';
import { DeleteMessageModal } from '@/common/components/modals/delete-message-modal';
import { DeleteServerModal } from '@/common/components/modals/delete-server-modal';
import { EditChannelModal } from '@/common/components/modals/edit-channel-modal';
import { EditServerModal } from '@/common/components/modals/edit-server-modal';
import { InviteModal } from '@/common/components/modals/invite-modal';
import { LeaveServerModal } from '@/common/components/modals/leave-server-modal';
import { MembersModal } from '@/common/components/modals/members-modal';
import { MessageFileModal } from '@/common/components/modals/message-file-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
};
