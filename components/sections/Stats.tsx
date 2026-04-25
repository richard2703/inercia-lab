import { homeContent } from '@/content/home';

function StatIcon({ index }: { index: number }) {
  const props = {
    width: 36,
    height: 36,
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...props}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function Stats() {
  const { stats } = homeContent;
  return (
    <section className="bg-brand-bg-gray py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.items.map((item, i) => (
          <div key={item.value} className="flex flex-col items-center text-center gap-3">
            <div className="text-brand-text-mid">
              <StatIcon index={i} />
            </div>
            <p className="text-4xl font-bold text-brand-text-dark">{item.value}</p>
            <p className="text-sm text-brand-text-mid leading-snug max-w-[140px]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
