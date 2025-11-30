"use client"
import { useEffect, useRef } from "react"

export default function CursorMeteor() {
  const el = useRef<HTMLDivElement | null>(null)
  const x = useRef(0)
  const y = useRef(0)
  const tx = useRef(0)
  const ty = useRef(0)

  useEffect(() => {
    const meteor = el.current
    if (!meteor) return

    const onMouseMove = (e: MouseEvent) => {
      x.current = e.clientX
      y.current = e.clientY
      meteor.style.opacity = "1"
    }

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

    const raf = () => {
      tx.current = lerp(tx.current, x.current - 8, 0.18)
      ty.current = lerp(ty.current, y.current - 8, 0.18)
      if (meteor) {
        meteor.style.transform = `translate3d(${tx.current}px, ${ty.current}px, 0)`
      }
      requestAnimationFrame(raf)
    }
    document.addEventListener("mousemove", onMouseMove)
    raf()
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={el}
        className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full bg-[#1f2937] opacity-0 transition-opacity duration-200"
        style={{
          transform: "translate3d(-9999px, -9999px, 0)",
          boxShadow:
            "0 6px 18px rgba(31,41,55,0.24), 0 2px 6px rgba(0,0,0,0.08) inset",
        }}
      />
    </>
  )
}