"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const RING_PROPAGATION_SPEED = 3
const aspect = 1.2
const cameraZ = 300

type Position = {
  order: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  arcAlt: number
  color: string
}

export type GlobeConfig = {
  pointSize?: number
  globeColor?: string
  showAtmosphere?: boolean
  atmosphereColor?: string
  atmosphereAltitude?: number
  emissive?: string
  emissiveIntensity?: number
  shininess?: number
  polygonColor?: string
  ambientLight?: string
  directionalLeftLight?: string
  directionalTopLight?: string
  pointLight?: string
  arcTime?: number
  arcLength?: number
  rings?: number
  maxRings?: number
  initialPosition?: {
    lat: number
    lng: number
  }
  autoRotate?: boolean
  autoRotateSpeed?: number
}

interface WorldProps {
  globeConfig: GlobeConfig
  data: Position[]
}

export function Globe({ className }: { className?: string }) {
  const globeConfig: GlobeConfig = {
    pointSize: 1,
    globeColor: "#1d072e",
    showAtmosphere: true,
    atmosphereColor: "#A9111D",
    atmosphereAltitude: 0.1,
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#A9111D",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: {
      lat: 22.3193,
      lng: 114.1694,
    },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const data: Position[] = [
    {
      order: 1,
      startLat: 38.9072,
      startLng: -77.0369,
      endLat: 9.145,
      endLng: 40.4897,
      arcAlt: 0.3,
      color: "#A9111D",
    },
    {
      order: 2,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 38.9072,
      endLng: -77.0369,
      arcAlt: 0.2,
      color: "#0C141F",
    },
  ]

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, cameraZ], fov: 40 }}>
        <SimpleGlobe globeConfig={globeConfig} data={data} />
        <OrbitControls enablePan={false} enableZoom={false} minDistance={cameraZ} maxDistance={cameraZ} />
      </Canvas>
    </div>
  )
}

function SimpleGlobe({ globeConfig, data }: WorldProps) {
  return (
    <>
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight} position={[-400, 100, 400]} intensity={0.6} />
      <directionalLight color={globeConfig.directionalTopLight} position={[-200, 500, 200]} intensity={0.6} />
      <pointLight color={globeConfig.pointLight} position={[-200, 500, 200]} intensity={0.6} />

      {/* Simple Globe Mesh */}
      <mesh>
        <sphereGeometry args={[100, 32, 32]} />
        <meshBasicMaterial color={globeConfig.globeColor} transparent opacity={0.8} wireframe />
      </mesh>

      {/* Connection Lines */}
      {data.map((connection, index) => (
        <group key={index}>
          <mesh
            position={[
              Math.cos((connection.startLng * Math.PI) / 180) * Math.cos((connection.startLat * Math.PI) / 180) * 100,
              Math.sin((connection.startLat * Math.PI) / 180) * 100,
              Math.sin((connection.startLng * Math.PI) / 180) * Math.cos((connection.startLat * Math.PI) / 180) * 100,
            ]}
          >
            <sphereGeometry args={[2, 8, 8]} />
            <meshBasicMaterial color={connection.color} />
          </mesh>

          <mesh
            position={[
              Math.cos((connection.endLng * Math.PI) / 180) * Math.cos((connection.endLat * Math.PI) / 180) * 100,
              Math.sin((connection.endLat * Math.PI) / 180) * 100,
              Math.sin((connection.endLng * Math.PI) / 180) * Math.cos((connection.endLat * Math.PI) / 180) * 100,
            ]}
          >
            <sphereGeometry args={[2, 8, 8]} />
            <meshBasicMaterial color={connection.color} />
          </mesh>
        </group>
      ))}
    </>
  )
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = []
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (arr.indexOf(r) === -1) arr.push(r)
  }
  return arr
}
