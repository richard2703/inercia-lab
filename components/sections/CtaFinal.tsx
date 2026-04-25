import { homeContent } from '@/content/home';

export default function CtaFinal() {
  const { ctaFinal } = homeContent;

  return (
    <section id="contacto" className="bg-brand-bg-warm py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-brand-text-dark">
            <span className="block">{ctaFinal.headingLine1}</span>
            <span className="block">{ctaFinal.headingLine2}</span>
            <span className="block text-brand-terra">{ctaFinal.accentLine}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-base text-brand-text-mid leading-relaxed">{ctaFinal.body}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaFinal.ctas.map(({ label, href, variant }) => (
              <a
                key={label}
                href={href}
                className={
                  variant === 'primary'
                    ? 'inline-flex items-center justify-center h-12 px-7 rounded-full bg-brand-terra text-white text-sm font-medium tracking-wide transition-colors hover:bg-[#d4845f]'
                    : 'inline-flex items-center justify-center h-12 px-7 rounded-full border border-brand-text-dark text-brand-text-dark text-sm font-medium tracking-wide transition-colors hover:bg-brand-bg-gray'
                }
              >
                {variant === 'primary' ? `${label} →` : label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
