'use client';

import { Plus } from 'lucide-react';

import { ActionTooltip } from '@/common/components/elements/action-tooltip';
import { useModal } from '@/common/hooks/use-modal-store';

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="添加服务器">
        <button
          onClick={() => onOpen('createServer')}
          className="group flex items-center"
        >
          <div className="mx-3 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-background transition-all group-hover:rounded-[16px] group-hover:bg-yellow-500 dark:bg-neutral-700">
            <Plus
              className="text-yellow-500 transition group-hover:text-white"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
