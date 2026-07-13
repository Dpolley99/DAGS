
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-aegis-navy border-t border-aegis-steel/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="rounded border border-aegis-steel/40 bg-aegis-navy/70 p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/Logo.png"
                  alt="DA Grid Solutions logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-display font-700 text-aegis-offwhite text-lg tracking-wide uppercase">
                  DA Grid<span className="text-aegis-accent"> Solutions</span>
                </span>
              </div>
              <p className="font-body font-300 text-aegis-silver text-sm leading-relaxed max-w-xs">
                Manufacturer-backed supplier of HV and UHV Air Insulated Switchgear to Distribution Network Operators, Independent Connection Providers, and EPC contractors.
              </p>
              <p className="font-mono text-xs text-aegis-silver/60 mt-4 uppercase tracking-wider">
                33 kV – 400 kV &nbsp;·&nbsp; IEC 62271 Series
              </p>
            </div>
          </div>

          {/* Product range */}
          <div>
            <div className="rounded border border-aegis-steel/40 bg-aegis-navy/70 p-5 h-full">
              <p className="font-mono text-xs text-aegis-silver uppercase tracking-widest mb-4">Product Range</p>
              <ul className="space-y-2">
                {['33 kV AIS Switchgear', '66 kV AIS Switchgear', '132 kV AIS Switchgear', '275 kV AIS Switchgear', '400 kV AIS Switchgear'].map((item) => (
                  <li key={item}>
                    <a href="#products" className="font-body font-300 text-aegis-silver hover:text-aegis-gold text-sm transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="rounded border border-aegis-steel/40 bg-aegis-navy/70 p-5 h-full">
              <p className="font-mono text-xs text-aegis-silver uppercase tracking-widest mb-4">Contact</p>
              <div className="space-y-3 text-sm text-aegis-silver/90">
                <div>
                  <p className="font-display font-700 text-aegis-offwhite uppercase tracking-wide text-xs mb-2">Registered address</p>
                  <address className="not-italic leading-relaxed">
                    DA GRID SOLUTIONS LTD<br />
                    3rd Floor<br />
                    Old Stock Exchange<br />
                    St Nicholas Street<br />
                    Bristol<br />
                    BS1 1TG
                  </address>
                </div>
                <div className="border-t border-aegis-steel/30 pt-3">
                  <p className="font-display font-700 text-aegis-offwhite uppercase tracking-wide text-xs mb-1">Email us</p>
                  <a
                    href="mailto:enquiries@dagridsolutions.co.uk"
                    className="font-body text-aegis-gold hover:text-aegis-accent transition-colors duration-150"
                  >
                    enquiries@dagridsolutions.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-aegis-steel/30 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-aegis-silver/50">
            &copy; {year} DA Grid Solutions. All rights reserved.
          </p>
          <p className="font-mono text-xs text-aegis-silver/40 uppercase tracking-wider">
            HV &amp; UHV Air Insulated Switchgear — Manufacturer-Backed Supply
          </p>
        </div>
      </div>
    </footer>
  );
}
