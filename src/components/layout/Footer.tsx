import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react' // 👈 usando lucide-react

const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Contacto', href: '/contacto' },
  ],
  social: [    
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/codecraftersmx/', // 👈 pon tu URL real
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61580625784898', // 👈 pon tu URL real
      icon: Facebook,
    },

  ],
}


export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container-custom py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold text-white">
              CodeCrafters
            </div>
            <p className="text-gray-300 text-sm">
              Consultora especializada en desarrollo de software y frameworks modernos. 
              Creamos soluciones tecnológicas innovadoras para tu negocio.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                 <a
                 key={item.name}
                 href={item.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Navegación
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Servicios
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <span className="text-sm text-gray-300">Desarrollo Web</span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-300">Aplicaciones Móviles</span>
                  </li>
                  <li>
                    <span className="text-sm text-gray-300">Consultoría Técnica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} CodeCrafters. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}