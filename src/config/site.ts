export const siteConfig = {
  name: "DevConsultora",
  description: "Consultora especializada en desarrollo de software y frameworks modernos",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/devconsultora",
    linkedin: "https://linkedin.com/company/devconsultora",
    email: "contacto@devconsultora.com",
    phone: "+1 (555) 123-4567",
  },
  author: {
    name: "DevConsultora Team",
    url: "https://devconsultora.com",
  },
}

export type SiteConfig = typeof siteConfig