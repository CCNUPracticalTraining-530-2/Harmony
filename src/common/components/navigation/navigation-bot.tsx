'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ActionTooltip } from '@/common/components/elements/action-tooltip';

export const NavigationBot = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/bot`);
  };

  return (
    <ActionTooltip side="right" align="center" label="导览助手">
      <button onClick={onClick} className="group relative flex items-center">
        <div className="absolute left-0 w-[4px] rounded-r-full bg-primary transition-all" />
        <div className="group relative mx-3 flex h-[48px] w-[48px] overflow-hidden rounded-[24px] transition-all group-hover:rounded-[16px]">
          <Image
            fill
            src="https://www.github.com/CCNUPracticalTraining-530-2.png"
            alt="Channel"
          />
        </div>
      </button>
    </ActionTooltip>
  );
};
