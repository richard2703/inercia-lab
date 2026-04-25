import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Programas: [
    { label: 'Acción Real', href: '/programas/accion-real' },
    { label: 'Equipos en Acción', href: '/programas/equipos-en-accion' },
    { label: 'Bienestar Sostenible', href: '/programas/bienestar-sostenible' },
  ],
  'Sobre Inercia Lab': [
    { label: 'Nuestra historia', href: '/sobre' },
    { label: 'Metodología', href: '/metodologia' },
    { label: 'Blog', href: '/blog' },
  ],
  Recursos: [
    { label: 'Recursos gratuitos', href: '/recursos' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Herramientas', href: '/herramientas' },
  ],
  Contacto: [
    { label: 'Agenda una sesión', href: '/contacto' },
    { label: 'Escríbenos', href: '/contacto' },
    { label: 'Preguntas frecuentes', href: '/faq' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-bg-gray border-t border-brand-bg-gray">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-12">
          <div className="flex flex-col gap-5 shrink-0">
            <Logo />
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-text-mid hover:text-brand-text-dark transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-text-mid hover:text-brand-text-dark transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <path d="M8 11v6M8 8v.01M12 17v-4a2 2 0 014 0v4M12 11v6" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-brand-text-mid hover:text-brand-text-dark transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="3" />
                  <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-text-dark mb-4">
                  {section}
                </p>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-brand-text-mid hover:text-brand-text-dark transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-text-dark/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-brand-text-mid">
          <p>© 2024 INERCIA LAB. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-brand-text-dark transition-colors">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-brand-text-dark transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
