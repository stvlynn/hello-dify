'use client';

import React from 'react';
import Giscus from '@giscus/react';

interface GiscusCommentProps {
  theme?: 'light' | 'dark' | 'noborder_light';
}

export function GiscusComment({ theme = 'noborder_light' }: GiscusCommentProps) {
  return (
    <div className="mt-10 pt-5 border-t">
      <div className="giscus-fallback">
        <Giscus
          id="comments"
          repo={process.env.NEXT_PUBLIC_GISCUS_REPO || 'stvlynn/hello-dify'}
          repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || 'R_kgDOOoLq8Q'}
          category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'Announcements'}
          categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || 'DIC_kwDOOoLq8c4CqOmC'}
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="bottom"
          theme={theme}
          lang="en"
          loading="lazy"
        />
      </div>
      <noscript>
        <div className="text-center py-4 text-gray-500">
          请启用 JavaScript 以查看评论。或前往 <a href="https://github.com/stvlynn/hello-dify/discussions" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> 直接参与讨论。
        </div>
      </noscript>
    </div>
  );
}

export default GiscusComment;