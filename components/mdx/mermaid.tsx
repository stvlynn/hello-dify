'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

// 初始化mermaid配置
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [id] = useState<string>(`mermaid-${Math.random().toString(36).substring(2, 10)}`);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const renderChart = async () => {
      if (!ref.current) return;
      
      mermaid.initialize({
        startOnLoad: true,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
      });

      try {
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
      } catch (error) {
        console.error('Error rendering mermaid chart:', error);
        setSvg(`<div class="text-red-500 p-2 border border-red-400 rounded">
          Error rendering chart: ${(error as Error).message || String(error)}
        </div>`);
      }
    };

    renderChart();
  }, [chart, id, isDark]);

  return (
    <div className="my-6 overflow-x-auto">
      {!svg && <div className="h-16 w-full animate-pulse bg-fd-muted/20 rounded" />}
      <div
        ref={ref}
        className="mermaid"
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{ display: svg ? 'block' : 'none' }}
      />
    </div>
  );
}

export default Mermaid; 