import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/[lang]/(home)/layout.tsx
 * Docs Layout: app/[lang]/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <Image
            src="/images/hello-dify.png"
            alt="Hello Dify Logo"
            width={100}
            height={50}
          />
        </>
      )
    }
  };
}
