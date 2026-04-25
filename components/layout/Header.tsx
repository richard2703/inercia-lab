'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Programas', href: '/programas' },
  { label: 'Sobre Inercia Lab', href: '/sobre' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-bg-warm border-b border-brand-bg-gray">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
        <Link href="/" aria-label="INERCIA LAB">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-[11px] font-medium tracking-widest uppercase transition-colors ${
                pathname === href
                  ? 'text-brand-text-dark border-b border-brand-text-dark pb-px'
                  : 'text-brand-text-mid hover:text-brand-text-dark'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center h-9 px-5 rounded-full bg-brand-lila text-white text-[11px] font-medium tracking-wider uppercase transition-colors hover:bg-[#a498b5] shrink-0"
        >
          Agendar sesión
        </Link>
      </div>
    </header>
  );
}
