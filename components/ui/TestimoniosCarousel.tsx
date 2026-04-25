'use client';

import { useState } from 'react';
import type { TestimoniosContent } from '@/content/home';

export default function TestimoniosCarousel({ content }: { content: TestimoniosContent }) {
  const [active, setActive] = useState(0);
  const item = content.items[active];

  return (
    <div className="flex flex-col">
      <p className="text-[10px] font-medium uppercase tracking-widest text-brand-terra mb-4">
        {content.label}
      </p>
      <h2 className="font-serif text-2xl md:text-3xl text-brand-text-dark mb-10">
        {content.heading}
      </h2>

      <div className="flex-1">
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          className="text-brand-terra mb-4"
        >
          <path
            d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C11.2 3.6 8.8 6 8 10.4H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0l1.6 2.4C28.8 3.6 26.4 6 25.6 10.4H32V24H17.6Z"
            fill="currentColor"
            opacity="0.25"
          />
        </svg>

        <p className="text-sm text-brand-text-mid leading-relaxed mb-6 min-h-[80px]">
          {item.quote}
        </p>

        <p className="text-sm font-semibold text-brand-terra">
          {item.author}
        </p>
        <p className="text-xs text-brand-text-mid mt-0.5">— {item.role}</p>
      </div>

      <div className="flex gap-2 mt-8">
        {content.items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Testimonio ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-6 bg-brand-terra' : 'w-1.5 bg-brand-text-mid/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
