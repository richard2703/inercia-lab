import { homeContent } from '@/content/home';
import type { ProgramCard, AccentColor } from '@/content/home';

const accent: Record<AccentColor, { number: string; iconBg: string; icon: string; check: string; btn: string }> = {
  green: {
    number: 'text-brand-green',
    iconBg: 'bg-brand-green/15',
    icon: 'text-brand-green',
    check: 'text-brand-green',
    btn: 'bg-brand-green text-white hover:bg-[#6a7e6b]',
  },
  terra: {
    number: 'text-brand-terra',
    iconBg: 'bg-brand-terra/15',
    icon: 'text-brand-terra',
    check: 'text-brand-terra',
    btn: 'bg-brand-terra text-white hover:bg-[#d4845f]',
  },
  lila: {
    number: 'text-brand-lila',
    iconBg: 'bg-brand-lila/15',
    icon: 'text-brand-lila',
    check: 'text-brand-lila',
    btn: 'bg-brand-lila text-white hover:bg-[#a498b5]',
  },
};

function ProgramIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4-4-8-7.5-8-12a8 8 0 0 1 16 0c0 4.5-4 8-8 12z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon({ className }: { className: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 mt-0.5 ${className}`}>
      <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ card, index }: { card: ProgramCard; index: number }) {
  const ac = accent[card.accent];
  return (
    <div className="flex flex-col bg-white rounded-2xl p-8 border border-brand-bg-gray shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-4xl font-bold leading-none ${ac.number}`}>{card.number}</span>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${ac.iconBg} ${ac.icon}`}>
          <ProgramIcon index={index} />
        </div>
      </div>
      <h3 className="text-xs font-bold tracking-widest text-brand-text-dark mb-1 uppercase">{card.name}</h3>
      <p className="text-xs text-brand-text-mid mb-4">{card.subtitle}</p>
      <p className="text-sm text-brand-text-mid leading-relaxed mb-6">{card.description}</p>
      <ul className="space-y-2 mb-8 flex-1">
        {card.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-brand-text-dark">
            <CheckIcon className={ac.check} />
            {b}
          </li>
        ))}
      </ul>
      <a
        href={card.href}
        className={`inline-flex items-center justify-center h-11 px-6 rounded-full text-[11px] font-medium tracking-wider uppercase transition-colors ${ac.btn}`}
      >
        {card.cta} →
      </a>
    </div>
  );
}

export default function Programas() {
  const { programas } = homeContent;
  return (
    <section id="programas" className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-medium uppercase tracking-widest text-brand-terra mb-4">
          {programas.label}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-text-dark mb-12 max-w-lg">
          {programas.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programas.cards.map((card, i) => (
            <Card key={card.number} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
