'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Star, Lock, ChevronRight, Search } from 'lucide-react'

interface ConstellationSidebarProps {
  open: boolean
  onClose: () => void
  constellation: any
}

export function ConstellationSidebar({ open, onClose, constellation }: ConstellationSidebarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  if (!constellation) return null

  const filteredCourses = constellation.courses?.filter((course: any) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  const handleCourseClick = (courseId: string) => {
    router.push(`/course/${courseId}`)
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="text-2xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {constellation.title}
          </SheetTitle>
          <SheetDescription className="leading-relaxed">
            {constellation.description}
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-6" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">ESTRELAS</h3>
            <Badge variant="secondary">
              {filteredCourses.length} cursos
            </Badge>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Procurar cursos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <ScrollArea className="h-[calc(100vh-400px)]">
            <div className="space-y-3">
              {filteredCourses.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Nenhum curso encontrado
                </p>
              ) : (
                filteredCourses.map((course: any, index: number) => (
                  <div
                    key={course.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      course.locked
                        ? 'border-border bg-secondary/20 opacity-60'
                        : 'border-purple-500/20 bg-card hover:border-[#B200EB] hover:bg-[#b000eb60] active:bg-[#B200EB] cursor-pointer'
                    }`}
                    onClick={() => !course.locked && handleCourseClick(course.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 ${course.locked ? 'text-muted-foreground' : 'text-purple-400'}`}>
                        {course.locked ? (
                          <Lock className="h-5 w-5" />
                        ) : (
                          <Star className="h-5 w-5" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium leading-relaxed">
                            {index + 1}. {course.title}
                          </h4>
                          {!course.locked && (
                            <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                        
                        {course.locked && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Finalize cursos anteriores para desbloquear
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          <Separator className="my-4" />

          <div className="flex gap-3">
            <Button
              className="flex-1 text-white bg-[#B200EB] hover:bg-[#B200EB] cursor-pointer active:scale-90"
              onClick={() => {
                if (filteredCourses[0]) {
                  handleCourseClick(filteredCourses[0].id)
                }
              }}
              disabled={!filteredCourses.length}
            >
              Começar Curso
            </Button>
            <Button onClick={onClose} className='cursor-pointer border-1 bg-[#000000] text-white border-[#B200EB]'>
              Fechar
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
