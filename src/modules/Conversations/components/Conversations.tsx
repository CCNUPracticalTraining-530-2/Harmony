import { redirectToSignIn } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { ChatHeader } from '@/common/components/chat/chat-header';
import { ChatInput } from '@/common/components/chat/chat-input';
import { ChatMessages } from '@/common/components/chat/chat-messages';
import { MediaRoom } from '@/common/components/elements/media-room';
import { getOrCreateConversation } from '@/common/libs/conversation';
import { currentProfile } from '@/common/libs/current-profile';
import { db } from '@/common/libs/db';

interface ConversationsProps {
  memberId: string;
  serverId: string;
  video?: boolean;
}

const Conversations: React.FC<ConversationsProps> = async ({
  memberId,
  serverId,
  video,
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect('/');
  }

  const conversation = await getOrCreateConversation(
    currentMember.id,
    memberId
  );

  if (!conversation) {
    return redirect(`/servers/${serverId}`);
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember =
    memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
    <div className="flex h-full flex-col bg-white dark:bg-[#313338]">
      <ChatHeader
        imageUrl={otherMember.profile.imageUrl}
        name={otherMember.profile.name}
        serverId={serverId}
        type="conversation"
      />
      {video && (
        <MediaRoom name={currentMember.profile.name} chatId={conversation.id} video={true} audio={true} />
      )}
      {!video && (
        <>
          <ChatMessages
            member={currentMember}
            name={otherMember.profile.name}
            chatId={conversation.id}
            type="conversation"
            apiUrl="/api/direct-messages"
            paramKey="conversationId"
            paramValue={conversation.id}
            socketUrl="/api/socket/direct-messages"
            socketQuery={{
              conversationId: conversation.id,
            }}
          />
          <ChatInput
            name={otherMember.profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Conversations;
