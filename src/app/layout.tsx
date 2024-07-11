import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { ModalProvider } from '@/common/components/providers/modal-provider';
import { QueryProvider } from '@/common/components/providers/query-provider';
import { SocketProvider } from '@/common/components/providers/socket-provider';
import { ThemeProvider } from '@/common/components/providers/theme-provider';
import { cn } from '@/common/utils/utils';

import '@/common/styles/globals.scss';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MuxiBar - 一個在線即時通訊軟體',
  description: '利用 Next.js v14 製作的時下最潮通訊軟體',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="zh-tw" suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="muxibar-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
