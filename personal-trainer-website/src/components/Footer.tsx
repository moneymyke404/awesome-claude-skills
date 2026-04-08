import { Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-bold text-brand-gold tracking-wider mb-1">D.S.I</div>
            <div className="text-xs text-brand-muted uppercase tracking-[0.3em] font-sans mb-4">
              Health Training LLC
            </div>
            <p className="text-brand-muted font-sans text-sm leading-relaxed max-w-sm">
              Atlanta's premier personal training and corporate wellness company. Transforming lives one workout at a time since our founding.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/d.s.i_health.training.llc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-brand-gray-mid flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-text mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                'Personal Training',
                'Group Training',
                'Nutrition Coaching',
                'Corporate Wellness',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-brand-muted hover:text-brand-gold text-xs font-sans uppercase tracking-wider transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Transformations', href: '#transformations' },
                { label: 'Corporate', href: '#corporate' },
                { label: 'Book Now', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-brand-muted hover:text-brand-gold text-xs font-sans uppercase tracking-wider transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-gray-mid pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs font-sans">
            © {year} D.S.I Health Training LLC. All rights reserved. Atlanta, GA.
          </p>
          <p className="text-brand-muted text-xs font-sans italic">
            "Transform Your Life"
          </p>
        </div>
      </div>
    </footer>
  );
}
