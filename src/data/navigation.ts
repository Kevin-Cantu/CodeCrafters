export const mainNavigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Proyectos", 
    href: "/proyectos",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
] as const

export const footerNavigation = {
  main: mainNavigation,
  services: [
    { name: "Desarrollo Web", href: "#" },
    { name: "Aplicaciones Móviles", href: "#" },
    { name: "APIs y Backend", href: "#" },
    { name: "Consultoría Técnica", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: "github",
    },
    {
      name: "LinkedIn", 
      href: "#",
      icon: "linkedin",
    },
  ],
} as const