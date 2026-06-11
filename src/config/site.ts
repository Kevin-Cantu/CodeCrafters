export const siteConfig = {
  name: "CodeCrafters",
  description: "Consultora especializada en desarrollo de software y frameworks modernos",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    email: "contacto@codecrafters.mx",
    phone: "+52 (81) 1234-5678",
    facebook: "https://www.facebook.com/profile.php?id=61580625784898",
    instagram: "https://www.instagram.com/codecraftersmx/",
  },
  author: {
    name: "CodeCrafters",
    url: "https://c-codecrafters.netlify.app",
  },
}

export type SiteConfig = typeof siteConfig