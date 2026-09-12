import { ArrowUpRight, Check, Flame, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { PageIntro } from '../components/ui/PageIntro';
import { whatsappBase } from '../data/products';

export function ContactPage() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    setStatus('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setStatus(data.message);
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Could not send the enquiry.');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageIntro
        label="CONTACT ESFIRE INDIA"
        title="Ready to light"
        accent="it up?"
        copy="Have a product in mind, a custom requirement, or simply want to know more? Leave a note and we’ll take it from there."
      />
      <section className="shell contact-grid">
        <div className="contact-panel">
          <span className="kicker">START HERE</span>
          <h2>Fire is a conversation.</h2>
          <div className="contact-links">
            <a href={whatsappBase} target="_blank" rel="noreferrer">
              <Check /> WhatsApp us <ArrowUpRight />
            </a>
            <a href="tel:+911140005678">
              <Phone /> +91 11 4000 5678
            </a>
            <a href="mailto:contact@esfire.in">
              <Mail /> contact@esfire.in
            </a>
            <span>
              <Flame /> Jalandhar, Punjab, India
            </span>
          </div>
          <p className="fine-print">
            CONTACT DETAILS SHOWN ARE CONFIGURABLE PLACEHOLDERS UNTIL CONFIRMED.
          </p>
        </div>
        <form className="enquiry-form" onSubmit={submit}>
          <label>
            NAME
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            EMAIL
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            I’M INTERESTED IN
            <select name="interest" defaultValue="Choosing a product">
              <option>Choosing a product</option>
              <option>A custom requirement</option>
              <option>Hospitality / projects</option>
              <option>Just saying hello</option>
            </select>
          </label>
          <label>
            PHONE (OPTIONAL)
            <input name="phone" placeholder="+91 ..." />
          </label>
          <label className="full">
            MESSAGE
            <textarea name="message" placeholder="Tell us what you’re imagining..." required />
          </label>
          <div className="form-foot">
            <span>We’ll only use your details to respond to this enquiry.</span>
            <button type="submit" disabled={sending}>
              {sending ? 'SENDING...' : 'SEND AN ENQUIRY'} <ArrowUpRight size={15} />
            </button>
          </div>
          {status && (
            <output className="form-status" aria-live="polite">
              {status}
            </output>
          )}
        </form>
      </section>
    </>
  );
}
