'use client'

import { usePathname } from 'next/navigation'

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // Forza el remount del árbol de la página al cambiar de ruta para re-ejecutar animaciones
  return <div key={pathname}>{children}</div>
}
