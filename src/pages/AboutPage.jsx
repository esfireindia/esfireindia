import { Factory, Flame, Layers3, Ruler } from 'lucide-react';
import { ArrowLink } from '../components/ui/ArrowLink';
import { PageIntro } from '../components/ui/PageIntro';

const tiles = [
  [Factory, 'Manufacturing', 'Fire products made close to the material and the process.'],
  [Ruler, 'Product design', 'A quieter, more useful kind of visual language.'],
  [Layers3, 'Fabrication', 'Structure, surface and function considered together.'],
  [Flame, 'Fire products', 'Objects made for cooking, warmth and gathering.'],
];

export function AboutPage() {
  return (
    <>
      <PageIntro
        label="ABOUT ESFIRE INDIA"
        title="We build"
        accent="around fire."
        copy="ESFIRE INDIA is a fire-product brand combining practical fire experiences with modern fabrication and product design."
      />
      <section className="shell about-grid">
        <div className="about-statement">
          <h2>A fire product should feel as considered before the flame as it does after.</h2>
          <p>
            We’re starting with a focused family of tandoors, fire stoves, bonfire pits and compact
            fire solutions. No inflated claims — just a clear ambition to make fire objects that
            work hard and live well.
          </p>
        </div>
        <div className="about-tiles">
          {tiles.map(([Icon, title, copy]) => (
            <article key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="shell about-ending">
        <h2>
          The catalogue is growing.
          <br />
          <em>The point of view stays clear.</em>
        </h2>
        <ArrowLink to="/contact">TALK TO ESFIRE</ArrowLink>
      </section>
    </>
  );
}
