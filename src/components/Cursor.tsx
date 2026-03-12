'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let tx = 0, ty = 0, cx = 0, cy = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = tx - 6 + 'px'
        cursorRef.current.style.top = ty - 6 + 'px'
      }
    }

    const animTrail = () => {
      cx += (tx - cx) * 0.15
      cy += (ty - cy) * 0.15
      if (trailRef.current) {
        trailRef.current.style.left = cx - 16 + 'px'
        trailRef.current.style.top = cy - 16 + 'px'
      }
      requestAnimationFrame(animTrail)
    }

    const onEnter = () => {
      cursorRef.current?.style.setProperty('transform', 'scale(2)')
      trailRef.current?.style.setProperty('transform', 'scale(1.5)')
    }
    const onLeave = () => {
      cursorRef.current?.style.setProperty('transform', 'scale(1)')
      trailRef.current?.style.setProperty('transform', 'scale(1)')
    }

    document.addEventListener('mousemove', onMove)
    animTrail()

    const addHoverListeners = () => {
      document.querySelectorAll('button, a, .service-card').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    // Run after paint
    requestAnimationFrame(addHoverListeners)

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}
