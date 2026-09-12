import { whatsappBase } from '../../data/products';
import { ArrowLink } from '../ui/ArrowLink';

export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <div>
          <span className="kicker">START A CONVERSATION / 07</span>
          <h2>
            Ready to light
            <br />
            <em>it up?</em>
          </h2>
        </div>
        <div>
          <p>Have a product in mind, a custom requirement, or simply want to know more?</p>
          <div className="button-row">
            <ArrowLink to={whatsappBase} external light>
              WHATSAPP US
            </ArrowLink>
            <ArrowLink to="/contact" light outline>
              SEND AN ENQUIRY
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
