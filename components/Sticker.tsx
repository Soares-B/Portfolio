import { useEffect, useRef, useState } from 'react'
import StickerPeel from './Bits/StickerPeel'

export default function Sticker({
  logo,
  x,
  y,
  size
}: {
  logo: string
  x: number
  y: number
  size: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(([entry]) => {
      setDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height
      })
    })

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  const positionX = (x / 100) * dimensions.width
  const positionY = (y / 100) * dimensions.height

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 31 }}
    >
      {dimensions.width > 0 && (
        <StickerPeel
          imageSrc={logo}
          width={
            size < 1280 ? 60 : size < 1920 ? 65 : 75
          }
          initialPosition={{
            x: positionX,
            y: -(positionY)
          }}
          finish="holo"
          peelBackHoverPct={25}
          peelBackActivePct={40}
          rotate={0}
          peelDirection={0}
          curlRadius={12}
          backColor="#d4d4d8"
          lightingIntensity={0.8}
          shadowIntensity={0.6}
          followPointer
          swing={1}
          friction={0.5}
          bounce={0.35}
          draggable
          intro
        />
      )}
    </div>
  )
}