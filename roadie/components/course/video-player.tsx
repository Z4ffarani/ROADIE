'use client'

import { Card } from '@/components/ui/card'

interface VideoPlayerProps {
  url: string
  title: string
}

export function VideoPlayer({ url, title }: VideoPlayerProps) {
  return (
    <Card className="border-purple-500/20 overflow-hidden">
      <div className="relative w-full pb-[56.25%]">
        <iframe
          src={url}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </Card>
  )
}