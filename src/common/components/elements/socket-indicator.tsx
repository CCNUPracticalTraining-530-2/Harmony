'use client';

import { useSocket } from '@/common/components/providers/socket-provider';
import { Badge } from '@/common/components/ui/badge';

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="border-none bg-yellow-600 text-white">
        Fallback: 每秒拉取一次
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="border-none bg-emerald-600 text-white">
      Live: 實時更新
    </Badge>
  );
};
