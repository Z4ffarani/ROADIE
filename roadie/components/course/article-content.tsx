'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ArticleContentProps {
  markdown: string
}


export function ArticleContent({ markdown }: ArticleContentProps) {
  return (
    <Card className="border-purple-500/20">
      <CardHeader>
        <CardTitle>CONTEÚDO DO CURSO</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => <h1 className="text-3xl font-bold mb-4 text-purple-400" {...props} />,
            h2: ({ ...props }) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400" {...props} />,
            h3: ({ ...props }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-400" {...props} />,
            p: ({ ...props }) => <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />,
            ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground" {...props} />,
            ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground" {...props} />,
            li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
            code: ({ className, children, ...props }: any) => {
              const isInline = !className
              return isInline ? (
                <code className="bg-purple-950/50 text-purple-300 px-1.5 py-0.5 rounded text-sm" {...props}>
                  {children}
                </code>
              ) : (
                <code className="block bg-[#0b0d10] text-purple-300 p-4 rounded-lg overflow-x-auto text-sm" {...props}>
                  {children}
                </code>
              )
            },
            pre: ({ ...props }) => <pre className="mb-4 overflow-x-auto" {...props} />,
            blockquote: ({ ...props }) => (
              <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 text-muted-foreground" {...props} />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </CardContent>
    </Card>
  )
}
