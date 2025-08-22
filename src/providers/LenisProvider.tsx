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
 * - Desktop: usa `lerp` y `wheelMultiplier`
 * - Mobile: usa `duration` + `syncTouch: true` + `touchMultiplier` (más fiable según versiones)
 * - Para scrollTo (anclas/botones): `anchorDuration`
 */
export type LenisConfig = {
  // Desktop
  lerp?: number
  wheelMultiplier?: number
  // Mobile
  duration?: number
  touchMultiplier?: number
  syncTouch?: boolean | number
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

    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      ('ontouchstart' in window) ||
      (navigator as any).maxTouchPoints > 0

    // Defaults razonables
    const baseDesktop: Required<Pick<LenisConfig, 'lerp' | 'wheelMultiplier'>> = {
      lerp: 0.06,
      wheelMultiplier: 0.9,
    }
    const baseMobile: Required<Pick<LenisConfig, 'duration' | 'touchMultiplier' | 'syncTouch'>> = {
      duration: 1.1, // mayor => más lento/suave
      touchMultiplier: 0.85, // <1 => más lento
      syncTouch: true, // usar el scroll táctil nativo pero sincronizado
    }

    const mergedDesktop = { ...baseDesktop, ...config }
    const mergedMobile = { ...baseMobile, ...mobileConfig }

    // Construimos opciones con `any` para mantener compatibilidad con cambios de tipos entre versiones
    const opts: any = {}

    if (isTouch) {
      // Modo móvil: usar duration + syncTouch en lugar de lerp
      opts.duration = mergedMobile.duration
      opts.touchMultiplier = mergedMobile.touchMultiplier
      opts.syncTouch = typeof mergedMobile.syncTouch === 'undefined' ? true : mergedMobile.syncTouch
    } else {
      // Modo desktop: usar lerp + wheelMultiplier
      opts.lerp = mergedDesktop.lerp
      opts.wheelMultiplier = mergedDesktop.wheelMultiplier
      opts.smoothWheel = true
    }

    const lenis = new Lenis(opts)

    // Opcional: ayuda para debug en dispositivo
    ;(window as any).lenis = lenis

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Reset al cambiar de ruta (sin hash)
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return
    lenis.scrollTo(0, { immediate: true })
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
      const samePath = url.pathname === window.location.pathname
      if (!samePath) return

      e.preventDefault()
      lenis.scrollTo(url.hash, { duration: anchorDuration })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [anchorDuration])

  return <>{children}</>
}
