
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/25537595/pexels-photo-25537595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Wide view of an industrial electrical substation with power lines and towers"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-r from-aegis-navy/95 via-aegis-navy/75 to-aegis-navy/30" />
        <div className="absolute inset-0 bg-linear-to-t from-aegis-navy via-transparent to-aegis-navy/40" />
      </div>

      {/* Structural grid lines — decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-aegis-accent/20 ml-[10%]" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-aegis-steel/30 mr-[15%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <p className="section-label mb-4">
            HV &amp; UHV Air Insulated Switchgear — Manufacturer-Backed Supply
          </p>

          <h1 className="font-display font-800 text-aegis-offwhite leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.0rem)' }}>
            Grid-Scale Switchgear.<br />
            <span className="text-aegis-accent">International Compliance.</span><br />
            Competitive Pricing.
          </h1>

          <p className="font-body font-300 text-aegis-light text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
            DA Grid Solutions provides type-tested HV and UHV Air Insulated Switchgear for utilities, independent connection providers, and EPC contractors — offering international manufacturing capability, UK technical support, and pricing advantages enabled by an efficient global supply chain.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#enquiry" className="btn-primary">
              Request a Quote
            </a>
            <a href="#products" className="btn-outline">
              View Product Range
            </a>
          </div>

          {/* Voltage range callout */}
          <div className="mt-14 flex flex-wrap gap-6">
            {[
              { label: 'Voltage Range', value: '33 kV – 400 kV' },
              { label: 'Asset Class', value: 'AIS Outdoor Switchgear' },
              { label: 'Standards', value: 'IEC 62271 Series' },
              { label: 'Supply Model', value: 'Manufacturer-Direct' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-aegis-accent pl-4">
                <p className="font-mono text-xs text-aegis-silver uppercase tracking-widest">{stat.label}</p>
                <p className="font-display font-700 text-aegis-offwhite text-base mt-0.5">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-aegis-silver hover:text-aegis-gold transition-colors group"
        aria-label="Scroll to product range"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
