import type { ReactElement } from 'react';
import { valuePillars } from '../data/products';

const icons: Record<string, ReactElement> = {  manufacturer: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  quality: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  pricing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  delivery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  technical: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    </svg>
  ),
  documentation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
};

export default function ValueProposition() {
  return (
    <section id="why" className="bg-aegis-steel/20 py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-aegis-mid/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-3/4 bg-aegis-accent/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — heading */}
          <div className="lg:col-span-4">
            <p className="section-label">Why DA Grid Solutions</p>
            <span className="divider-accent" />
            <h2 className="section-heading text-4xl lg:text-5xl mb-6">
              The Case for<br />Manufacturer-Direct<br />Supply
            </h2>
            <p className="font-body font-300 text-aegis-silver text-base leading-relaxed mb-8">
              Procurement decisions at this voltage class carry significant programme and financial risk. DA Grid Solutions is structured to reduce that risk — through direct manufacturer relationships, engineering-led pre-sales, and a supply model built around the realities of substation construction programmes.
            </p>
            <a href="#enquiry" className="btn-primary">
              Start an Enquiry
            </a>
          </div>

          {/* Right column — pillars grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-aegis-steel/30">
            {valuePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-aegis-navy p-7 group hover:bg-aegis-steel/30 transition-colors duration-200"
              >
                <div className="text-aegis-accent mb-4 group-hover:text-aegis-gold transition-colors duration-200">
                  {icons[pillar.id]}
                </div>
                <h3 className="font-display font-700 text-aegis-offwhite text-base mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-body font-300 text-aegis-silver text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
