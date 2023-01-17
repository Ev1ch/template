import type { ReactNode } from 'react';

import { Box } from '@/components/common';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Box>{children}</Box>;
}
