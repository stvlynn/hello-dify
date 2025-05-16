import React from 'react';
import Giscus from '@giscus/react';

interface GiscusCommentProps {
  theme?: 'light' | 'dark' | 'noborder_light';
}

export function GiscusComment({ theme = 'noborder_light' }: GiscusCommentProps) {
  return (
    <div className="mt-10 pt-5 border-t">
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
  );
}

export default GiscusComment;