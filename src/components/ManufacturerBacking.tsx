
export default function ManufacturerBacking() {
  return (
    <section id="manufacturer" className="bg-aegis-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-aegis-accent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-4/3">
              <img
                src="https://images.pexels.com/photos/36358684/pexels-photo-36358684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Detailed view of electrical components in a power substation under a clear blue sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-aegis-navy/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-aegis-accent p-6 w-48">
              <p className="font-display font-800 text-aegis-navy text-4xl leading-none">IEC</p>
              <p className="font-display font-700 text-aegis-navy text-lg leading-tight">62271</p>
              <p className="font-mono text-aegis-navy/80 text-xs uppercase tracking-wider mt-2">Type-Tested Series</p>
            </div>
            {/* Second accent block */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-aegis-accent/40" aria-hidden="true" />
          </div>

          {/* Text side */}
          <div className="lg:pl-4">
            <p className="section-label">Manufacturer Backing</p>
            <span className="divider-accent" />
            <h2 className="section-heading text-4xl lg:text-5xl mb-6">
              Factory Credentials.<br />
              <span className="text-aegis-accent">Not Distributor Claims.</span>
            </h2>

            <p className="font-body font-300 text-aegis-silver text-base leading-relaxed mb-6">
              DA Grid Solutions is not an independent distributor sourcing equipment from the open market. We operate with direct manufacturer backing — meaning the equipment we supply is sourced through a formal OEM relationship, with full access to factory technical support, type test documentation, and warranty structures that originate at the point of manufacture.
            </p>
            <p className="font-body font-300 text-aegis-silver text-base leading-relaxed mb-10">
              For procurement teams at DNOs and EPCs, this distinction matters. It determines the quality of post-delivery support, the integrity of the documentation package, and the enforceability of warranty terms. Our manufacturer relationship is the foundation on which every supply contract is built.
            </p>

            {/* Credential list */}
            <ul className="space-y-4 mb-10">
              {[
                'OEM-issued type test certificates for all voltage classes',
                'Factory Acceptance Testing (FAT) conducted at manufacturer facility',
                'Full IEC 62271-100 / IEC 62271-200 compliance documentation',
                'Manufacturer-backed warranty terms, not third-party guarantees',
                'Direct access to OEM engineering and applications support',
                'Traceable supply chain from factory to site',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-aegis-accent" aria-hidden="true" />
                  <span className="font-body font-300 text-aegis-light text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#enquiry" className="btn-primary">
              Request Technical Documentation
            </a>
          </div>
        </div>
      </div>

      {/* Second editorial image strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <div className="relative overflow-hidden h-48 lg:h-64">
          <img
            src="https://images.pexels.com/photos/9989522/pexels-photo-9989522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Outdoor electrical power substation with high voltage equipment and safety signs"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-aegis-navy/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="font-display font-800 text-aegis-offwhite text-2xl lg:text-4xl tracking-wide uppercase">
                Supplying the Infrastructure That Powers the Grid
              </p>
              <p className="font-mono text-aegis-silver text-sm mt-3 tracking-widest uppercase">
                33 kV &nbsp;·&nbsp; 66 kV &nbsp;·&nbsp; 132 kV &nbsp;·&nbsp; 275 kV &nbsp;·&nbsp; 400 kV
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
