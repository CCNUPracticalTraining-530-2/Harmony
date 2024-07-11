import { ChannelType, MemberRole } from '@prisma/client';
import {
  Hash,
  MessageCircleMore,
  Mic,
  ShieldCheck,
  UserCog,
  Video,
} from 'lucide-react';
import { redirect } from 'next/navigation';

import { ScrollArea } from '@/common/components/ui/scroll-area';
import { Separator } from '@/common/components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/common/components/ui/tabs';
import { currentProfile } from '@/common/libs/current-profile';
import { db } from '@/common/libs/db';

import { ServerChannel } from './server-channel';
import { ServerHeader } from './server-header';
import { ServerMember } from './server-member';
import { ServerSearch } from './server-search';
import { ServerSection } from './server-section';

interface ServerSidebarProps {
  serverId: string;
}

const iconMap = {
  [ChannelType.TEXT]: <Hash className="mr-2 h-4 w-4" />,
  [ChannelType.AUDIO]: <Mic className="mr-2 h-4 w-4" />,
  [ChannelType.VIDEO]: <Video className="mr-2 h-4 w-4" />,
};

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="mr-2 h-4 w-4 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <UserCog className="mr-2 h-4 w-4 text-rose-500" />,
};

export const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        orderBy: {
          createdAt: 'asc',
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: 'asc',
        },
      },
    },
  });

  const textChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.TEXT
  );
  const audioChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.AUDIO
  );
  const videoChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.VIDEO
  );
  const members = server?.members.filter(
    (member) => member.profileId !== profile.id
  );

  if (!server) {
    return redirect('/');
  }

  const role = server.members.find(
    (member) => member.profileId === profile.id
  )?.role;

  return (
    <div className="flex h-full w-full flex-col bg-[#F2F3F5] text-primary dark:bg-[#2B2D31]">
      <ServerHeader server={server} role={role} />
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearch
            data={[
              {
                label: '文字频道',
                type: 'channel',
                data: textChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                })),
              },
              {
                label: '语音频道',
                type: 'channel',
                data: audioChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                })),
              },
              {
                label: '视讯频道',
                type: 'channel',
                data: videoChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                })),
              },
              {
                label: '服务器成员',
                type: 'member',
                data: members?.map((member) => ({
                  id: member.id,
                  name: member.profile.name,
                  icon: roleIconMap[member.role],
                })),
              },
            ]}
          />
        </div>
        <Separator className="my-2 rounded-md bg-zinc-200 dark:bg-zinc-700" />
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text">
              <MessageCircleMore className="mr-2 h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="audio">
              <Mic className="mr-2 h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="video">
              <Video className="mr-2 h-4 w-4" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            {!!textChannels?.length && (
              <div className="mb-2">
                <ServerSection
                  sectionType="channels"
                  channelType={ChannelType.TEXT}
                  role={role}
                  label="文字频道"
                />
                <div className="space-y-[2px]">
                  {textChannels.map((channel) => (
                    <ServerChannel
                      key={channel.id}
                      channel={channel}
                      role={role}
                      server={server}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="audio">
            {!!audioChannels?.length && (
              <div className="mb-2">
                <ServerSection
                  sectionType="channels"
                  channelType={ChannelType.AUDIO}
                  role={role}
                  label="语音频道"
                />
                <div className="space-y-[2px]">
                  {audioChannels.map((channel) => (
                    <ServerChannel
                      key={channel.id}
                      channel={channel}
                      role={role}
                      server={server}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="video">
            {!!videoChannels?.length && (
              <div className="mb-2">
                <ServerSection
                  sectionType="channels"
                  channelType={ChannelType.VIDEO}
                  role={role}
                  label="视讯频道"
                />
                <div className="space-y-[2px]">
                  {videoChannels.map((channel) => (
                    <ServerChannel
                      key={channel.id}
                      channel={channel}
                      role={role}
                      server={server}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
        {!!members?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="members"
              role={role}
              label="服务器成员"
              server={server}
            />
            <div className="space-y-[2px]">
              {members.map((member) => (
                <ServerMember key={member.id} member={member} server={server} />
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
