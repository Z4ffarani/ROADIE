'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { apiClient } from '@/lib/api-client'
import { Course } from '@/db/constellations'

interface Constellation {
  id: string
  title: string
  position3d: { x: number; y: number; z: number }
  visual_meta: { color: string; radius: number }
  courses: Course[]
}

function ConstellationMesh({
  constellation,
  onClick,
}: {
  constellation: Constellation
  onClick: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        constellation.position3d.y + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      meshRef.current.rotation.y += 0.002
      const targetScale = hovered ? 1.2 : 1
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
    }
  })

  const { color, radius } = constellation.visual_meta

  return (
    <group
      position={[
        constellation.position3d.x,
        constellation.position3d.y,
        constellation.position3d.z,
      ]}
    >
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHovered(false)
          document.body.style.cursor = 'default'
        }}
      >
        <Text
          position={[0, radius + 3, 0]}
          fontSize={2.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {constellation.title}
        </Text>

        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={hovered ? 1 : 0.8} />

        {constellation.courses.map((course, index) => {
          const angle = (index / constellation.courses.length) * Math.PI * 2
          const distance = radius + 15
          const x = Math.cos(angle) * distance
          const z = Math.sin(angle) * distance

          return (
            <mesh key={course.id} position={[x, 0, z]}>
              <sphereGeometry args={[2, 16, 16]} />
              <meshBasicMaterial
                color={course.locked ? '#666' : '#FFD700'}
                transparent
                opacity={0.8}
              />
            </mesh>
          )
        })}
      </mesh>
    </group>
  )
}

function Scene({
  onConstellationClick,
}: {
  onConstellationClick: (c: Constellation) => void
}) {
  const [constellations, setConstellations] = useState<Constellation[]>([])
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 20, 100)
    loadData()
  }, [camera])

  const loadData = async () => {
    const courseMap = await apiClient.getConstellations()

    const grouped: Record<string, Course[]> = {}
    Object.values(courseMap).forEach((course) => {
      if (!grouped[course.constellation_id]) grouped[course.constellation_id] = []
      grouped[course.constellation_id].push(course)
    })

    const colors = [
      '#8A2BE2', '#00D9FF', '#FF6B6B', '#4ECDC4', '#FFD93D',
      '#FF9F1C', '#2EC4B6', '#E71D36', '#9B5DE5', '#00BBF9',
      '#F15BB5', '#7BDFF2', '#B8F2E6', '#FFC6FF', '#C1FF72',
      '#FA824C', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'
    ]

    const minDist = 20 // distância mínima entre constelações
    const usedPositions: {x: number, y: number, z: number}[] = []

    function generatePosition() {
      let pos
      let attempts = 0
    
      const scaleX = 2
      const scaleY = 0.5
      const scaleZ = 1

      do {
        const radius = 50 + Math.random() * 40 // distância do centro
        const theta = Math.random() * 2 * Math.PI
        const phi = Math.acos(2 * Math.random() - 1)
        pos = {
          x: radius * Math.sin(phi) * Math.cos(theta) * scaleX,
          y: radius * Math.sin(phi) * Math.sin(theta) * scaleY,
          z: radius * Math.cos(phi) * scaleZ,
        }
        attempts++
      } while (
        usedPositions.some(p => 
          Math.sqrt(
            (p.x - pos.x)**2 + (p.y - pos.y)**2 + (p.z - pos.z)**2
          ) < minDist
        ) && attempts < 50
      )
      usedPositions.push(pos)
      return pos
    }

    const constellationDefs: Constellation[] = Object.entries(grouped).map(
      ([constId, courses], index) => ({
        id: constId,
        title: courses[0].title,
        position3d: generatePosition(),
        visual_meta: {
          color: colors[index % colors.length],
          radius: 6,
        },
        courses,
      })
    )

    setConstellations(constellationDefs)
  }

  return (
    <>
      <Stars radius={200} depth={50} count={5000} factor={4} fade />
      <OrbitControls enablePan enableZoom enableRotate />

      {constellations.map((c) => (
        <ConstellationMesh
          key={c.id}
          constellation={c}
          onClick={() => onConstellationClick(c)}
        />
      ))}

      {/* Bloom para brilho intenso */}
      <EffectComposer>
        <Bloom
          intensity={8}
          luminanceThreshold={0.2}
          luminanceSmoothing={1}
        />
      </EffectComposer>
    </>
  )
}

export default function ConstellationScene({
  onConstellationClick,
}: {
  onConstellationClick: (c: Constellation) => void
}) {
  return (
    <Canvas camera={{ position: [0, 20, 100], fov: 60 }}>
      <Suspense fallback={null}>
        <Scene onConstellationClick={onConstellationClick} />
      </Suspense>
    </Canvas>
  )
}