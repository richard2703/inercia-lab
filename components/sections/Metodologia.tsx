import { homeContent } from '@/content/home';

const stepStyles = [
  { circleBg: 'bg-brand-green/20', circleText: 'text-brand-green', number: 'text-brand-text-mid' },
  { circleBg: 'bg-brand-terra/20', circleText: 'text-brand-terra', number: 'text-brand-terra' },
  { circleBg: 'bg-brand-lila/20', circleText: 'text-brand-lila', number: 'text-brand-lila' },
  { circleBg: 'bg-brand-green/20', circleText: 'text-brand-green', number: 'text-brand-text-mid' },
];

function StepIcon({ index }: { index: number }) {
  const props = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  if (index === 0) {
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...props}>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.9 10.2 19 8.7 19 7a7 7 0 1 0-13.4 2.8C6.3 11.4 7.5 13 9 14" />
        <path d="M9 18h6M10 22h4" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...props}>
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default function Metodologia() {
  const { metodologia } = homeContent;
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-medium uppercase tracking-widest text-brand-terra mb-4 text-center">
          {metodologia.label}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-text-dark mb-16 text-center max-w-lg mx-auto">
          {metodologia.heading}
        </h2>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-bg-gray" />

          {metodologia.steps.map((step, i) => {
            const s = stepStyles[i];
            return (
              <div key={step.number} className="flex flex-col items-center text-center gap-3 relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center z-10 ${s.circleBg} ${s.circleText}`}>
                  <StepIcon index={i} />
                </div>
                <p className={`text-xs font-medium ${s.number}`}>{step.number}</p>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text-dark">{step.title}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
