import { homeContent } from '@/content/home';
import TestimoniosCarousel from '@/components/ui/TestimoniosCarousel';

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-brand-terra">
      <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DiferencialTestimonios() {
  const { diferencial, testimonios } = homeContent;

  return (
    <section className="bg-brand-bg-gray py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-widest text-brand-terra mb-6">
            {diferencial.label}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-text-dark mb-2">
            {diferencial.heading[0]}
          </h2>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-terra mb-10">
            {diferencial.heading[1]}
          </h2>
          <ul className="space-y-3">
            {diferencial.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-brand-text-dark">
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <TestimoniosCarousel content={testimonios} />
      </div>
    </section>
  );
}
