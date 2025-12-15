'use client'

// expandir para diferentes areas

import { Suspense, useState } from 'react'
import ConstellationScene from './constellation-scene'
import { ConstellationHUD } from './constellation-hud'
import { ConstellationSidebar } from './constellation-sidebar'
import { Loader2 } from 'lucide-react'

export function ConstellationExplorer() {
  const [selectedConstellation, setSelectedConstellation] = useState<any>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleConstellationClick = (constellation: any) => {
    setSelectedConstellation(constellation)
    setSidebarOpen(true)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0b0d10]">
      {/* 3D Scene */}
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          </div>
        }
      >
        <ConstellationScene onConstellationClick={handleConstellationClick} />
      </Suspense>

      {/* HUD Overlay */}
      <ConstellationHUD />

      {/* Sidebar */}
      <ConstellationSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        constellation={selectedConstellation}
      />
    </div>
  )
}
