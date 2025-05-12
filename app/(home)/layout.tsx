import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          text: 'Documentation',
          url: '/docs',
        },
        {
          text: 'GitHub',
          url: 'https://github.com/stvlynn/hello-dify',
          external: true,
        },
        {
          text: 'Discord',
          url: 'https://discord.gg/drd3HnTv',
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
