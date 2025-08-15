'use client'

import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Evitar que el navegador restaure la posición de scroll entre rutas
  useEffect(() => {
    if ('scrollRestoration' in history) {
      const { scrollRestoration } = history as History & { scrollRestoration?: 'auto' | 'manual' }
      if (scrollRestoration !== undefined) history.scrollRestoration = 'manual'
      return () => {
        if (scrollRestoration !== undefined) history.scrollRestoration = 'auto'
      }
    }
  }, [])

  // Forzar scroll al tope al cambiar de ruta (antes del primer paint)
  useLayoutEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return <div key={pathname}>{children}</div>
}
