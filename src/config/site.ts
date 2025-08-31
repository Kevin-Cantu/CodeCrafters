export const siteConfig = {
  name: "CodeCrafters",
  description: "Consultora especializada en desarrollo de software y frameworks modernos",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {

    email: "contac@codecraftersmx.com",
    phone: "+52 1 81 2627 0599",
  },
  author: {
    name: "CodeCrafters",
    url: "https://c-codecrafters.netlify.app",
  },
}

export type SiteConfig = typeof siteConfig