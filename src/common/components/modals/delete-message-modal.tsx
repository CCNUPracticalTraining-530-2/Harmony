'use client';

import axios from 'axios';
import qs from 'query-string';
import { useState } from 'react';

import { Button } from '@/common/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/common/components/ui/dialog';
import { useModal } from '@/common/hooks/use-modal-store';

export const DeleteMessageModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === 'deleteMessage';
  const { apiUrl, query } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: apiUrl || '',
        query,
      });

      await axios.delete(url);

      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="overflow-hidden bg-white p-0 text-black">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-center text-2xl font-bold">
            刪除訊息
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            你確定你要這麼做嗎？ <br />
            該訊息將被永久刪除。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex w-full items-center justify-between">
            <Button disabled={isLoading} onClick={onClose} variant="ghost">
              取消
            </Button>
            {/* @ts-ignore */}
            <Button disabled={isLoading} variant="primary" onClick={onClick}>
              確定
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
