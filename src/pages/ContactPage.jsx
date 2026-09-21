import { ArrowUpRight, Check, Flame, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageIntro } from '../components/ui/PageIntro';
import { createWhatsAppUrl, products, whatsappBase } from '../data/products';

export function ContactPage() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [searchParams] = useSearchParams();
  const requestedProduct = products.find((item) => item.slug === searchParams.get('product'));
  const requestedSize = searchParams.get('size');
  const requestedVariant = requestedProduct?.variants?.find(
    (variant) => variant.size === requestedSize,
  );
  const requestedInterest = requestedProduct
    ? `${requestedProduct.name}${requestedVariant ? ` — ${requestedVariant.label}` : ''}`
    : 'Choosing a product';
  const requestedMessage = requestedProduct
    ? `I would like a quote for the ${requestedProduct.name}${requestedVariant ? `, ${requestedVariant.label}` : ''}. Please share price and delivery details.`
    : '';

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    setStatus('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const whatsappUrl = createWhatsAppUrl(
      [
        'Hi Esfire India, I have a website enquiry.',
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || 'Not provided'}`,
        `Interest: ${payload.interest}`,
        `Message: ${payload.message}`,
      ].join('\n'),
    );

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

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
            <a href="tel:+918360935461">
              <Phone /> +91 83609-35461
            </a>
            <a href="mailto:contact@esfire.in">
              <Mail /> contact@esfire.in
            </a>
            <span>
              <Flame /> Jalandhar, Punjab, India
            </span>
          </div>
        </div>
        <form
          className="enquiry-form"
          onSubmit={submit}
          key={`${requestedProduct?.slug || 'general'}-${requestedSize || 'none'}`}
        >
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
            <select name="interest" defaultValue={requestedInterest}>
              {requestedProduct && <option>{requestedInterest}</option>}
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
            <textarea
              name="message"
              placeholder="Tell us what you’re imagining..."
              defaultValue={requestedMessage}
              required
            />
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
