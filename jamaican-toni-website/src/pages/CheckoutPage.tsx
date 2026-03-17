import { useState } from 'react';
import { Lock, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
  cartProduct?: string;
}

const steps = ['Information', 'Shipping', 'Payment'];

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

export default function CheckoutPage({ onNavigate, cartProduct }: CheckoutPageProps) {
  const product = products.find(p => p.id === cartProduct) ?? products[0];
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', apt: '', city: '', state: '', zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) { setStep(s => s + 1); }
    else { onNavigate('confirmation'); }
  };

  return (
    <div className="min-h-screen bg-jt-cream-dk" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%23EAE0CC\'/%3E%3C/svg%3E")' }}>
      {/* Header */}
      <div className="bg-jt-cream border-b border-jt-stone/20 py-6 text-center">
        <button onClick={() => onNavigate('home')} className="font-display text-2xl font-bold tracking-wider text-jt-text">
          Jamaican Toni
        </button>
        <div className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-gold mt-1">Atlanta · Est. 2024</div>
        {/* Gold monogram */}
        <div className="flex justify-center mt-3">
          <div className="w-8 h-8 rounded-full border border-jt-gold/40 flex items-center justify-center">
            <span className="font-display text-xs font-bold text-jt-gold">JT</span>
          </div>
        </div>
      </div>

      {/* Page title */}
      <div className="text-center py-10 px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-jt-text">
          Complete Your Alignment
        </h1>
        <p className="font-serif italic text-jt-muted mt-2 text-sm">
          This limited release will not restock.
        </p>
      </div>

      {/* Main grid */}
      <div className="max-w-5xl mx-auto px-4 pb-24 grid lg:grid-cols-[1fr_380px] gap-8">

        {/* Left: Form */}
        <div>
          {/* Step progress */}
          <div className="bg-jt-cream border border-jt-stone/20 px-6 py-4 flex items-center gap-4 mb-6">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                {i > 0 && <div className="h-px w-8 bg-jt-stone/30" />}
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`text-[11px] font-sans uppercase tracking-widest transition-colors ${
                    i === step ? 'text-jt-text font-semibold border-b border-jt-charcoal' :
                    i < step ? 'text-jt-gold cursor-pointer' : 'text-jt-muted/50'
                  }`}
                >
                  {s}
                </button>
              </div>
            ))}
          </div>

          <form onSubmit={handleContinue}>
            <div className="bg-jt-cream border border-jt-stone/20 p-6 md:p-8 space-y-5">

              {step === 0 && (
                <>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-widest text-jt-muted block mb-2">
                      Email Address
                    </label>
                    <input name="email" type="email" required value={form.email}
                      onChange={handleChange} placeholder="Email Address"
                      className="jt-input" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-sans uppercase tracking-widest text-jt-muted block mb-2">First Name</label>
                      <input name="firstName" required value={form.firstName}
                        onChange={handleChange} placeholder="First Name" className="jt-input" />
                    </div>
                    <div>
                      <label className="text-[10px] font-sans uppercase tracking-widest text-jt-muted block mb-2">Last Name</label>
                      <input name="lastName" required value={form.lastName}
                        onChange={handleChange} placeholder="Last Name" className="jt-input" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-widest text-jt-muted block mb-2">Address</label>
                    <input name="address" required value={form.address}
                      onChange={handleChange} placeholder="Address" className="jt-input" />
                  </div>
                  <input name="apt" value={form.apt}
                    onChange={handleChange} placeholder="Apartment, suite, etc. (optional)"
                    className="jt-input" />
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-widest text-jt-muted block mb-2">City</label>
                    <input name="city" required value={form.city}
                      onChange={handleChange} placeholder="City" className="jt-input" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select name="state" required value={form.state}
                      onChange={handleChange} className="jt-input appearance-none cursor-pointer">
                      <option value="">State / Province</option>
                      {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <input name="zip" required value={form.zip}
                      onChange={handleChange} placeholder="ZIP Code" className="jt-input" />
                  </div>
                </>
              )}

              {step === 1 && (
                <div className="py-4 space-y-4">
                  <p className="section-eyebrow">Shipping Method</p>
                  {[
                    { label: 'Standard (3–5 Business Days)', price: 'Free', selected: true },
                    { label: 'Express (1–2 Business Days)', price: '$18' },
                    { label: 'Overnight', price: '$35' },
                  ].map(({ label, price, selected }) => (
                    <label key={label} className={`flex items-center justify-between p-4 border cursor-pointer transition-all ${
                      selected ? 'border-jt-charcoal bg-jt-charcoal/5' : 'border-jt-stone/30 hover:border-jt-charcoal/40'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selected ? 'border-jt-charcoal' : 'border-jt-stone/40'
                        }`}>
                          {selected && <div className="w-2 h-2 rounded-full bg-jt-charcoal" />}
                        </div>
                        <span className="font-sans text-sm text-jt-text">{label}</span>
                      </div>
                      <span className="font-sans text-sm font-semibold text-jt-text">{price}</span>
                    </label>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p className="section-eyebrow">Payment Details</p>
                  <input placeholder="Card Number" className="jt-input" />
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="Expiry (MM/YY)" className="jt-input" />
                    <input placeholder="CVV" className="jt-input" />
                  </div>
                  <input placeholder="Name on Card" className="jt-input" />
                </div>
              )}

              <button type="submit" className="btn-gold w-full py-5 text-center flex items-center justify-center gap-2 mt-2">
                {step < steps.length - 1 ? (
                  <><span>Continue</span><ChevronRight size={15} /></>
                ) : (
                  <><Lock size={14} /><span>Complete Alignment</span></>
                )}
              </button>
            </div>

            {/* Payment icons */}
            <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
              {['VISA', 'MC', 'AMEX', 'GPAY', 'APPLE'].map(card => (
                <div key={card} className="px-2.5 py-1 border border-jt-stone/30 bg-white text-[9px] font-sans text-jt-muted tracking-wider">
                  {card}
                </div>
              ))}
            </div>
          </form>
        </div>

        {/* Right: Order summary */}
        <div>
          <div className="bg-jt-cream border border-jt-stone/20 p-6 sticky top-6">
            <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-5">Order Summary</p>

            {/* Product row */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-jt-stone/20">
              <div className={`w-16 h-20 ${product.heroBg} relative flex-shrink-0 overflow-hidden`}>
                <div className="absolute inset-0 bg-texture-dark" />
                <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-white/20 select-none">
                  {product.name.split(' ').map(w => w[0]).join('')}
                </span>
                {/* Qty badge */}
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-jt-charcoal text-jt-cream text-[9px] font-bold flex items-center justify-center">
                  1
                </div>
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-jt-text uppercase tracking-wide leading-tight">{product.name}</p>
                <p className="font-sans text-jt-muted text-xs mt-1">Size M · {product.colors[0]}</p>
              </div>
              <p className="font-sans font-semibold text-jt-text text-sm">${product.price}</p>
            </div>

            {/* Discount code */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Gift card or discount code"
                className="flex-1 jt-input text-xs"
              />
              <button className="btn-outline-dark text-[10px] py-2 px-4 whitespace-nowrap">Apply</button>
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm font-sans">
              <div className="flex justify-between text-jt-muted">
                <span>Subtotal</span>
                <span>${product.price}</span>
              </div>
              <div className="flex justify-between text-jt-muted">
                <span>Shipping</span>
                <span className="text-jt-teal font-medium">Free</span>
              </div>
              <div className="flex justify-between text-jt-muted">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-jt-text text-base pt-3 border-t border-jt-stone/30">
                <span>Total</span>
                <span>${product.price} USD</span>
              </div>
            </div>

            {/* Security badge */}
            <div className="flex items-center justify-center gap-2 mt-6 text-jt-muted/60">
              <Lock size={12} />
              <span className="text-[10px] font-sans uppercase tracking-widest">Secured & encrypted checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-jt-stone/30 py-6 text-center">
        <p className="font-display text-jt-text font-bold text-lg tracking-widest uppercase">Jamaican Toni</p>
        <p className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-gold mt-1">Powered by Island Love</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          {['Privacy', 'Terms', 'Instagram', 'Contact'].map(item => (
            <span key={item} className="text-[10px] font-sans uppercase tracking-widest text-jt-muted hover:text-jt-gold cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
