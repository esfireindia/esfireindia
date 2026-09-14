import { Mail } from 'lucide-react';
import { PageIntro } from '../components/ui/PageIntro';

const termsSections = [
  [
    'Website use',
    'You may use this website to explore ESFIRE INDIA products, understand their intended applications and contact us about a purchase or project. You must not misuse the website, interfere with its operation or use its content for unlawful purposes.',
  ],
  [
    'Product information',
    'Product images, descriptions and specifications are provided for general catalogue guidance. Materials, dimensions, finishes, fuel configurations, availability and performance details may change. Confirm all essential details directly with ESFIRE INDIA before ordering, installation or use.',
  ],
  [
    'Enquiries, quotations and orders',
    'Sending a website form, email or WhatsApp message does not by itself create a binding order. An order is confirmed only when both parties agree to the applicable quotation, scope, price, payment terms, delivery details and any product-specific conditions.',
  ],
  [
    'Safety and installation',
    'Fire products must be selected, installed, ventilated, operated and maintained for their intended use. Follow the instructions supplied with the confirmed product, observe local requirements and seek qualified installation advice where appropriate. Never leave an active fire unattended.',
  ],
  [
    'Pricing, payment and delivery',
    'Any final price, taxes, transport charges, payment schedule, lead time and delivery responsibility will be stated in the quotation or order confirmation. Website content does not override the terms agreed for a specific order.',
  ],
  [
    'Intellectual property',
    'The ESFIRE INDIA name, website design, copy, product presentation, images and other original materials are protected by applicable intellectual-property laws. They may not be reproduced, adapted or used commercially without prior written permission.',
  ],
  [
    'Liability and external services',
    'To the extent permitted by law, ESFIRE INDIA is not responsible for loss caused by reliance on unconfirmed catalogue information, misuse of a product, or third-party websites and services linked from this site. Nothing in these terms excludes rights or liability that cannot legally be excluded.',
  ],
  [
    'Applicable law and contact',
    'These terms are governed by the applicable laws of India. If you have a question about these terms or a specific order, contact ESFIRE INDIA before proceeding.',
  ],
];

const privacySections = [
  [
    'Information we collect',
    'When you contact us, we may receive your name, email address, phone number, product interest, location and the information included in your message. Our hosting provider may also process standard technical request data needed to deliver and secure the website.',
  ],
  [
    'How we use information',
    'We use enquiry information to respond, understand your requirement, prepare quotations, coordinate orders and improve customer support. We do not use the information submitted through this website to sell unrelated third-party advertising.',
  ],
  [
    'WhatsApp and external links',
    'Some actions open WhatsApp, Instagram, email or another third-party service. Information you send through those services is also handled under that provider’s privacy terms. Review their settings before sharing personal or sensitive information.',
  ],
  [
    'Storage and security',
    'Enquiry details may be stored in our business systems or website database when available. We use reasonable measures to protect information, but no internet transmission or storage system can be guaranteed to be completely secure.',
  ],
  [
    'Sharing',
    'We may share relevant information with service providers that help us operate the website, communicate with you, fulfil an order or deliver a product. We may also disclose information when required by law. We do not sell your personal information.',
  ],
  [
    'Retention',
    'We retain enquiry and order information only for as long as reasonably needed for communication, service, record-keeping, legal or operational purposes. Retention periods may vary depending on the nature of the interaction.',
  ],
  [
    'Your choices',
    'You may ask us to correct or delete personal information we hold about your enquiry, subject to legal and operational record-keeping requirements. You can also choose not to provide optional information.',
  ],
  [
    'Updates and contact',
    'We may update this policy when our website or business practices change. The latest version will appear on this page. Contact us if you have a privacy question or request.',
  ],
];

function LegalPage({ number, label, title, accent, copy, sections }) {
  return (
    <>
      <PageIntro number={number} label={label} title={title} accent={accent} copy={copy} />
      <section className="shell legal-content">
        <aside className="legal-aside">
          <span className="kicker">LAST UPDATED</span>
          <strong>15 SEPTEMBER 2026</strong>
          <p>Please read this page before using the website or relying on catalogue information.</p>
          <a href="mailto:contact@esfire.in">
            <Mail size={16} /> contact@esfire.in
          </a>
        </aside>
        <div className="legal-sections">
          {sections.map(([heading, body], index) => (
            <article key={heading}>
              <span>0{index + 1}</span>
              <div>
                <h2>{heading}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      number="06"
      label="LEGAL / ESFIRE INDIA"
      title="Terms &"
      accent="conditions."
      copy="The terms that apply when you browse this website, enquire about a product or begin an order with ESFIRE INDIA."
      sections={termsSections}
    />
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      number="07"
      label="PRIVACY / ESFIRE INDIA"
      title="Privacy"
      accent="policy."
      copy="A clear summary of the information we receive through this website and how it may be used when you contact ESFIRE INDIA."
      sections={privacySections}
    />
  );
}
