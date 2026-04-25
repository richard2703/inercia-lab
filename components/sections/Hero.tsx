import { homeContent } from '@/content/home';
import type { CtaItem } from '@/content/home';

function ctaClass(variant: CtaItem['variant']): string {
  const base =
    'inline-flex items-center justify-center h-12 px-7 text-sm font-medium rounded-full transition-colors';
  if (variant === 'primary') {
    return `${base} bg-brand-terra text-white hover:bg-[#d4845f]`;
  }
  if (variant === 'outline') {
    return `${base} border border-brand-text-dark text-brand-text-dark hover:bg-brand-bg-gray`;
  }
  return `${base} text-brand-text-mid hover:text-brand-text-dark hover:underline underline-offset-4`;
}

export default function Hero() {
  const { headline, sub, closing, ctas } = homeContent.hero;

  return (
    <section className="min-h-screen flex items-center bg-brand-bg-warm px-6 py-24 md:px-20">
      <div className="w-full max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight text-brand-text-dark mb-8">
          {headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mb-4 space-y-1">
          {sub.map((line, i) => (
            <p key={i} className="text-xl md:text-2xl text-brand-text-mid leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        <p className="text-xl md:text-2xl font-semibold text-brand-text-dark mb-12">
          {closing}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {ctas.map(({ label, href, variant }) => (
            <a key={label} href={href} className={ctaClass(variant)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
