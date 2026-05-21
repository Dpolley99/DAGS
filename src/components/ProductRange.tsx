
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { products } from '../data/products';

type Filter = 'ALL' | 'HV' | 'UHV';

export default function ProductRange() {
  const [filter, setFilter] = useState<Filter>('ALL');
  const [active, setActive] = useState<string | null>(null);

  const filtered = filter === 'ALL' ? products : products.filter((p) => p.voltageClass === filter);

  return (
    <section id="products" className="bg-aegis-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="section-label">Product Range</p>
            <span className="divider-accent" />
            <h2 className="section-heading text-4xl lg:text-5xl">
              HV &amp; UHV Air Insulated<br />Switchgear
            </h2>
            <p className="font-body font-300 text-aegis-silver text-base mt-4 max-w-xl leading-relaxed">
              Our range spans 33 kV through 400 kV, covering the full spectrum of distribution and transmission voltage classes required by DNOs, ICPs, and EPC contractors operating across the UK grid.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 bg-aegis-steel/30 p-1 self-start lg:self-auto">
            {(['ALL', 'HV', 'UHV'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-display font-600 text-xs tracking-widest uppercase px-5 py-2.5 transition-colors duration-150 ${
                  filter === f
                    ? 'bg-aegis-accent text-aegis-navy'
                    : 'text-aegis-silver hover:text-aegis-offwhite'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-aegis-steel/30">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="bg-aegis-navy group cursor-pointer"
              onClick={() => setActive(active === product.id ? null : product.id)}
              tabIndex={0}
              role="button"
              aria-expanded={active === product.id}
              aria-label={`View details for ${product.designation}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(active === product.id ? null : product.id);
                }
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-4/3">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-aegis-navy/80 to-transparent" />
                <span className={`absolute top-4 left-4 font-display font-700 text-xs tracking-widest uppercase px-3 py-1 ${
                  product.voltageClass === 'UHV' ? 'bg-aegis-accent text-aegis-navy' : 'bg-aegis-mid text-aegis-light'
                }`}>
                  {product.voltageClass}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 border-t border-aegis-steel/50 group-hover:border-aegis-accent/50 transition-colors duration-200">
                <h3 className="font-display font-700 text-aegis-offwhite text-lg leading-tight mb-3">
                  {product.designation}
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                  <div>
                    <p className="font-mono text-xs text-aegis-silver uppercase tracking-wider">Rated Voltage</p>
                    <p className="font-mono font-500 text-aegis-light text-sm mt-0.5">{product.ratedVoltage}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-aegis-silver uppercase tracking-wider">Rated Current</p>
                    <p className="font-mono font-500 text-aegis-light text-sm mt-0.5">{product.ratedCurrent}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-aegis-silver uppercase tracking-wider">Breaking Capacity</p>
                    <p className="font-mono font-500 text-aegis-light text-sm mt-0.5">{product.breakingCapacity}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-aegis-silver uppercase tracking-wider">Standard</p>
                    <p className="font-mono font-500 text-aegis-light text-sm mt-0.5">{product.standard}</p>
                  </div>
                </div>

                {/* Expandable application */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === product.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-3 border-t border-aegis-steel/40">
                    <p className="font-mono text-xs text-aegis-silver uppercase tracking-wider mb-1">Typical Application</p>
                    <p className="font-body font-300 text-aegis-light text-sm leading-relaxed">{product.application}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-4 text-aegis-accent group-hover:gap-2 transition-all duration-150">
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {active === product.id ? 'Close' : 'Application Details'}
                  </span>
                  <ChevronRight size={14} className={`transition-transform duration-200 ${active === product.id ? 'rotate-90' : ''}`} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-aegis-steel/40 pt-10">
          <p className="font-body font-300 text-aegis-silver text-base max-w-lg">
            Require a voltage class or configuration not listed? Our technical team can advise on bespoke specifications and extended product variants.
          </p>
          <a href="#enquiry" className="btn-primary shrink-0">
            Discuss Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
