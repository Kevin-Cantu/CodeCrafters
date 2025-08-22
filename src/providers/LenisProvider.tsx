'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { usePathname } from 'next/navigation'

/**
 * LenisProvider
 * - Activa smooth scrolling global con Lenis
 * - Respeta prefers-reduced-motion
 * - Intercepta enlaces de ancla (#id) para scroll suave
 * - Resetea el scroll al cambiar de ruta
 *
 * Ajustes de velocidad/suavidad:
 * - Desktop: `lerp` y `wheelMultiplier`
 * - Mobile (tacto): `touchMultiplier` (y si quieres, `lerp`)
 * - Para scrollTo (anclas/botones): `anchorDuration`
 */
export type LenisConfig = {
  lerp?: number
  smoothWheel?: boolean
  wheelMultiplier?: number
  touchMultiplier?: number
}

export function LenisProvider({
  children,
  config,
  mobileConfig,
  anchorDuration = 1.2,
}: {
  children: React.ReactNode
  config?: LenisConfig
  mobileConfig?: LenisConfig
  anchorDuration?: number
}) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const pathname = usePathname()

  // Inicializa Lenis una vez
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return // accesibilidad

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    // Base defaults
    const base: Required<LenisConfig> = {
      lerp: 0.06,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    }

    // Mezcla: config global + override mobile si es pointer "coarse"
    const merged: Required<LenisConfig> = {
      ...base,
      ...config,
      ...(isCoarsePointer ? mobileConfig : {}),
    } as Required<LenisConfig>

    const lenis = new Lenis({
      lerp: merged.lerp,
      smoothWheel: merged.smoothWheel,
      wheelMultiplier: merged.wheelMultiplier,
      touchMultiplier: merged.touchMultiplier,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }
    rafIdRef.current = requestAnimationFrame(raf)

    // Si hay hash al cargar, posicióname ahí
    if (window.location.hash) {
      lenis.scrollTo(window.location.hash, { immediate: true })
    }

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      lenis.destroy()
      lenisRef.current = null
    }
    // No incluimos `config`/`mobileConfig` para no reinstanciar Lenis en runtime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Reset al cambiar de ruta (sin hash)
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return
    // Si se navega a otra ruta, vuelve al top
    lenis.scrollTo(0, { immediate: true })
    // Si la nueva URL trae hash, respétalo
    if (window.location.hash) {
      lenis.scrollTo(window.location.hash, { immediate: true })
    }
  }, [pathname])

  // Scroll suave para enlaces internos de ancla
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#' || href === '#!') return

      const url = new URL(href, window.location.href)
      // Solo interceptar si apunta a la misma página (misma ruta) o hash local
      const samePath = url.pathname === window.location.pathname
      if (!samePath) return

      e.preventDefault()
      // Ajusta la duración para hacer el desplazamiento más lento o más rápido
      lenis.scrollTo(url.hash, { duration: anchorDuration })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [anchorDuration])

  return <>{children}</>
}
