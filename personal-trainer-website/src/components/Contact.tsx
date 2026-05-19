import { useState } from 'react';
import { Instagram, MapPin, Send, Phone, Mail } from 'lucide-react';

const serviceOptions = [
  'One-on-One Personal Training',
  'Small Group Training',
  'Nutrition Coaching',
  'Corporate Wellness Program',
  'Other / General Inquiry',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a form service (Formspree, EmailJS, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">
            Let's Connect
          </p>
          <h2 className="section-heading text-brand-text">
            Start Your <span className="text-brand-gold">Journey</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-lg mx-auto mt-2 font-sans">
            Ready to transform your health? Reach out and let's build a plan around your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-brand-text mb-6">
                Contact Info
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted uppercase tracking-wider font-sans mb-1">Location</div>
                    <div className="text-brand-text font-sans text-sm">Atlanta, Georgia</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <Instagram size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted uppercase tracking-wider font-sans mb-1">Instagram</div>
                    <a
                      href="https://www.instagram.com/d.s.i_health.training.llc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:text-brand-gold-light text-sm font-sans transition-colors"
                    >
                      @d.s.i_health.training.llc
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted uppercase tracking-wider font-sans mb-1">Email</div>
                    <div className="text-brand-text font-sans text-sm">contact@dsihealthtraining.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted uppercase tracking-wider font-sans mb-1">Phone</div>
                    <div className="text-brand-text font-sans text-sm">(404) 000-0000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-brand-gray border border-brand-gray-mid p-6">
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-brand-text mb-4">
                Hours of Operation
              </h4>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: '5:00 AM – 9:00 PM' },
                  { day: 'Saturday', hours: '7:00 AM – 5:00 PM' },
                  { day: 'Sunday', hours: 'By Appointment' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm font-sans">
                    <span className="text-brand-muted">{day}</span>
                    <span className="text-brand-text">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/d.s.i_health.training.llc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 p-4 group hover:border-purple-400/50 transition-colors"
            >
              <Instagram size={20} className="text-pink-400" />
              <div>
                <div className="text-brand-text text-sm font-sans font-medium">Follow on Instagram</div>
                <div className="text-brand-muted text-xs font-sans">See the latest transformations</div>
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brand-gold/10 border border-brand-gold p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center mb-6">
                  <Send size={24} className="text-brand-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-brand-gold mb-3">
                  Message Sent!
                </h3>
                <p className="text-brand-muted font-sans text-sm max-w-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours to discuss your goals and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-brand-muted uppercase tracking-widest font-sans mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-gray border border-brand-gray-mid text-brand-text font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-gray-light"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted uppercase tracking-widest font-sans mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-brand-gray border border-brand-gray-mid text-brand-text font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-gray-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-brand-muted uppercase tracking-widest font-sans mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-gray border border-brand-gray-mid text-brand-text font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-gray-light"
                      placeholder="(404) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted uppercase tracking-widest font-sans mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-gray border border-brand-gray-mid text-brand-text font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-brand-gray text-brand-muted">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-brand-gray">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-brand-muted uppercase tracking-widest font-sans mb-2">
                    Tell Us About Your Goals *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-brand-gray border border-brand-gray-mid text-brand-text font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-gray-light resize-none"
                    placeholder="Share your fitness goals, current fitness level, and any questions you have..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                  <Send size={14} />
                  Send Message
                </button>

                <p className="text-brand-muted text-xs font-sans text-center">
                  We respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
