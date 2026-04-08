import { useState } from 'react';
import { Lock, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
  cartProduct?: string;
}

const steps = ['Information', 'Shipping', 'Payment'];

export default function CheckoutPage({ onNavigate, cartProduct }: CheckoutPageProps) {
  const product = products.find(p => p.id === cartProduct) ?? products[0];
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', apt: '', city: '', state: '', zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) setStep(s => s + 1);
    else onNavigate('confirmation');
  };

  return (
    <div className="min-h-screen bg-jt-cream bg-noise">

      {/* ── HEADER — Clean, minimal (Net-a-Porter checkout) ── */}
      <div className="border-b border-jt-stone/15 py-6">
        <div className="max-w-5xl mx-auto px-5 flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="font-display text-xl font-semibold tracking-[0.12em] text-jt-text">
            JAMAICAN TONI
          </button>
          <div className="flex items-center gap-2 text-[10px] font-sans text-jt-muted">
            <Lock size={12} />
            <span className="uppercase tracking-widest">Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="max-w-5xl mx-auto px-5 py-10 lg:py-14 grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">

        {/* LEFT: Form */}
        <div>
          {/* Steps */}
          <div className="flex items-center gap-0 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                {i > 0 && <div className="w-10 h-px bg-jt-stone/25 mx-2" />}
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`text-[11px] font-sans uppercase tracking-[0.2em] transition-colors pb-1 ${
                    i === step ? 'text-jt-text border-b border-jt-charcoal' :
                    i < step ? 'text-jt-gold cursor-pointer' : 'text-jt-muted/40'
                  }`}
                >
                  {s}
                </button>
              </div>
            ))}
          </div>

          <form onSubmit={handleContinue} className="space-y-6">
            {step === 0 && (
              <>
                <div>
                  <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">Email</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="input-boxed" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">First Name</label>
                    <input name="firstName" required value={form.firstName} onChange={handleChange} placeholder="First Name" className="input-boxed" />
                  </div>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">Last Name</label>
                    <input name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Last Name" className="input-boxed" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">Address</label>
                  <input name="address" required value={form.address} onChange={handleChange} placeholder="Street Address" className="input-boxed" />
                </div>
                <input name="apt" value={form.apt} onChange={handleChange} placeholder="Apt, suite, etc. (optional)" className="input-boxed" />
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">City</label>
                    <input name="city" required value={form.city} onChange={handleChange} placeholder="City" className="input-boxed" />
                  </div>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">State</label>
                    <select name="state" required value={form.state} onChange={handleChange} className="input-boxed appearance-none cursor-pointer">
                      <option value="">Select</option>
                      <option value="GA">Georgia</option>
                      <option value="FL">Florida</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted block mb-2">ZIP</label>
                    <input name="zip" required value={form.zip} onChange={handleChange} placeholder="30301" className="input-boxed" />
                  </div>
                </div>
              </>
            )}

            {step === 1 && (
              <div className="space-y-3">
                <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted mb-4">Shipping Method</p>
                {[
                  { label: 'Standard (3–5 days)', price: 'Complimentary', active: true },
                  { label: 'Express (1–2 days)', price: '$18' },
                  { label: 'Overnight', price: '$35' },
                ].map(({ label, price, active }) => (
                  <label key={label} className={`flex items-center justify-between p-5 border cursor-pointer transition-all duration-300 ${
                    active ? 'border-jt-charcoal' : 'border-jt-stone/20 hover:border-jt-charcoal/30'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? 'border-jt-charcoal' : 'border-jt-stone/30'}`}>
                        {active && <div className="w-2 h-2 rounded-full bg-jt-charcoal" />}
                      </div>
                      <span className="font-sans text-sm text-jt-text">{label}</span>
                    </div>
                    <span className={`font-sans text-sm ${active ? 'text-jt-teal font-medium' : 'text-jt-text'}`}>{price}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted mb-2">Payment</p>
                <input placeholder="Card number" className="input-boxed" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM / YY" className="input-boxed" />
                  <input placeholder="CVC" className="input-boxed" />
                </div>
                <input placeholder="Name on card" className="input-boxed" />
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-5 mt-2">
              {step < steps.length - 1 ? (
                <><span>Continue</span><ChevronRight size={14} /></>
              ) : (
                <><Lock size={13} /><span>Complete Order</span></>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
            {['VISA', 'MASTERCARD', 'AMEX', 'APPLE PAY', 'GPAY'].map(c => (
              <span key={c} className="text-[9px] font-sans uppercase tracking-widest text-jt-muted/40">{c}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div>
          <div className="border border-jt-stone/15 p-7 sticky top-6 bg-jt-cream">
            <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-6">Order Summary</p>

            {/* Product */}
            <div className="flex gap-4 mb-6 pb-6 border-b border-jt-stone/15">
              <div className={`w-[72px] aspect-[3/4] ${product.heroBg} relative flex-shrink-0 overflow-hidden`}>
                <div className="absolute inset-0 bg-noise" />
                <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-white/15 select-none">
                  {product.name.split(' ').map(w => w[0]).join('')}
                </span>
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-jt-charcoal text-jt-cream text-[9px] font-semibold flex items-center justify-center">1</div>
              </div>
              <div className="flex-1 flex justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-jt-text leading-tight">{product.name}</p>
                  <p className="font-sans text-xs text-jt-muted mt-1">Size M · {product.colors[0]}</p>
                </div>
                <p className="font-sans text-sm text-jt-text">${product.price}</p>
              </div>
            </div>

            {/* Discount code */}
            <div className="flex gap-2 mb-6">
              <input placeholder="Discount code" className="flex-1 input-boxed text-xs py-3" />
              <button className="btn-secondary text-[10px] py-3 px-5"><span>Apply</span></button>
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm font-sans">
              <div className="flex justify-between text-jt-text/60"><span>Subtotal</span><span>${product.price}</span></div>
              <div className="flex justify-between text-jt-text/60"><span>Shipping</span><span className="text-jt-teal">Free</span></div>
              <div className="flex justify-between font-semibold text-jt-text text-base pt-4 border-t border-jt-stone/15">
                <span>Total</span><span>${product.price} USD</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-jt-stone/15 flex items-center justify-center gap-2 text-jt-muted/50">
              <ShieldCheck size={13} />
              <span className="text-[10px] font-sans uppercase tracking-widest">Secured & encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
