
import { useState, useCallback } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone: string;
  enquiryType: string;
  voltageClass: string;
  message: string;
}

const INITIAL: FormState = {
  name: '',
  organisation: '',
  role: '',
  email: '',
  phone: '',
  enquiryType: '',
  voltageClass: '',
  message: '',
};

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting(true);
      // Mock submission delay
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));
      setSubmitting(false);
      setSubmitted(true);
    },
    []
  );

  const inputClass =
    'w-full bg-aegis-steel/20 border border-aegis-steel text-aegis-offwhite font-body text-sm px-4 py-3 placeholder-aegis-silver/50 focus:outline-none focus:border-aegis-accent transition-colors duration-150';
  const labelClass = 'block font-mono text-xs text-aegis-silver uppercase tracking-wider mb-2';

  return (
    <section id="enquiry" className="bg-aegis-steel/10 py-24 lg:py-32 relative overflow-hidden">
      {/* Background image strip */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/37005800/pexels-photo-37005800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-aegis-navy to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — intro */}
          <div className="lg:col-span-4">
            <p className="section-label">Enquiries &amp; Quotations</p>
            <span className="divider-accent" />
            <h2 className="section-heading text-4xl lg:text-5xl mb-6">
              Start a Technical<br />Enquiry
            </h2>
            <p className="font-body font-300 text-aegis-silver text-base leading-relaxed mb-8">
              Submit your requirements using the form and a member of our technical team will respond within one working day. For urgent programme requirements, please indicate this in your message.
            </p>

            <div className="space-y-6">
              {[
                {
                  heading: 'Procurement Enquiries',
                  body: 'Pricing, lead times, and commercial terms for specific voltage classes and quantities.',
                },
                {
                  heading: 'Technical Pre-Sales',
                  body: 'Specification review, protection coordination, and interface requirement discussions.',
                },
                {
                  heading: 'Documentation Requests',
                  body: 'Type test certificates, FAT procedures, and IEC compliance documentation.',
                },
              ].map((item) => (
                <div key={item.heading} className="border-l-2 border-aegis-steel pl-4 hover:border-aegis-accent transition-colors duration-200">
                  <p className="font-display font-700 text-aegis-offwhite text-sm mb-1">{item.heading}</p>
                  <p className="font-body font-300 text-aegis-silver text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7 lg:col-start-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 border border-aegis-steel/40 bg-aegis-navy/60 px-8">
                <CheckCircle size={48} className="text-aegis-accent mb-6" />
                <h3 className="font-display font-700 text-aegis-offwhite text-2xl mb-3">
                  Enquiry Received
                </h3>
                <p className="font-body font-300 text-aegis-silver text-base max-w-sm leading-relaxed">
                  Thank you for your enquiry. A member of the DA Grid Solutions technical team will be in contact within one working day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL); }}
                  className="btn-outline mt-8 text-xs"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="organisation" className={labelClass}>Organisation *</label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      required
                      autoComplete="organization"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className={labelClass}>Job Title / Role</label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      autoComplete="organization-title"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="e.g. Procurement Manager"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="j.smith@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Telephone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 (0)..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiryType" className={labelClass}>Enquiry Type *</label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={form.enquiryType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>Select type</option>
                      <option value="quotation">Request for Quotation</option>
                      <option value="technical">Technical Pre-Sales</option>
                      <option value="documentation">Documentation Request</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label htmlFor="voltageClass" className={labelClass}>Voltage Class of Interest</label>
                  <select
                    id="voltageClass"
                    name="voltageClass"
                    value={form.voltageClass}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select voltage class (if applicable)</option>
                    <option value="33kv">33 kV AIS</option>
                    <option value="66kv">66 kV AIS</option>
                    <option value="132kv">132 kV AIS</option>
                    <option value="275kv">275 kV AIS</option>
                    <option value="400kv">400 kV AIS</option>
                    <option value="multiple">Multiple / To Be Confirmed</option>
                  </select>
                </div>

                {/* Row 5 */}
                <div>
                  <label htmlFor="message" className={labelClass}>Requirements / Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, including voltage class, quantity, programme dates, and any specific technical parameters."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                  <p className="font-mono text-xs text-aegis-silver/70 leading-relaxed">
                    Fields marked * are required. We respond within one working day.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
