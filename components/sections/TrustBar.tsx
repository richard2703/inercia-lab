import { homeContent } from '@/content/home';

export default function TrustBar() {
  const { trustBar } = homeContent;
  return (
    <section className="bg-white border-y border-brand-bg-gray py-8 px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-16">
        <p className="text-[10px] font-medium uppercase tracking-widest text-brand-text-mid whitespace-nowrap">
          {trustBar.label}
        </p>
        <div className="flex items-center gap-12">
          {trustBar.companies.map((name) => (
            <span key={name} className="text-sm font-bold tracking-widest text-brand-text-dark uppercase">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
