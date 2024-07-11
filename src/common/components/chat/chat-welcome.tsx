import { Hash } from 'lucide-react';

interface ChatWelcomeProps {
  name: string;
  type: 'channel' | 'conversation';
}

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="mb-4 space-y-2 px-4">
      {type === 'channel' && (
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-zinc-500 dark:bg-zinc-700">
          <Hash className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="text-xl font-bold md:text-3xl">
        {type === 'channel' ? '欢迎来到 #' : ''}
        {name}！
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {type === 'channel'
          ? `这就是 #${name} 频道的起点。`
          : `这就是您与 ${name} 私人信息记录的开头。`}
      </p>
    </div>
  );
};
