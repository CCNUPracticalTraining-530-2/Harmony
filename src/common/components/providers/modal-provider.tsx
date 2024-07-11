"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/common/components/modals/create-server-modal";
import { InviteModal } from "@/common/components/modals/invite-modal";
import { EditServerModal } from "@/common/components/modals/edit-server-modal";
import { MembersModal } from "@/common/components/modals/members-modal";
import { CreateChannelModal } from "@/common/components/modals/create-channel-modal";
import { LeaveServerModal } from "@/common/components/modals/leave-server-modal";
import { DeleteServerModal } from "@/common/components/modals/delete-server-modal";
import { DeleteChannelModal } from "@/common/components/modals/delete-channel-modal";
import { EditChannelModal } from "@/common/components/modals/edit-channel-modal";
import { MessageFileModal } from "@/common/components/modals/message-file-modal";
import { DeleteMessageModal } from "@/common/components/modals/delete-message-modal";

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
