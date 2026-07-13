
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Product Range', href: '#products' },
  { label: 'Why DA Grid Solutions', href: '#why' },
  { label: 'Manufacturer Backing', href: '#manufacturer' },
  { label: 'Enquire', href: '#enquiry' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-aegis-navy/95 backdrop-blur-sm border-b border-aegis-steel' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="DA Grid Solutions home">
          <img
            src="/Logo.png"
            alt="DA Grid Solutions logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display font-700 text-aegis-offwhite text-lg tracking-wide uppercase">
            DA <span className="text-aegis-accent font-200">Grid Solutions</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono font-500 text-sm text-aegis-silver hover:text-aegis-gold tracking-wide uppercase transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="btn-primary text-xs py-3 px-6"
          >
            Request a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-aegis-silver hover:text-aegis-gold transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-aegis-navy border-t border-aegis-steel px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono font-500 text-sm text-aegis-silver hover:text-aegis-gold tracking-wide uppercase transition-colors duration-150 py-2 border-b border-aegis-steel/40"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="btn-primary text-xs py-3 px-6 self-start mt-2"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
