import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import './globals.css'

export const metadata: Metadata = {
  title: 'Harmony - 在线即时通讯平台',
  description: '爱来自华中师范大学 2022 级计算机学院早安少女组',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}