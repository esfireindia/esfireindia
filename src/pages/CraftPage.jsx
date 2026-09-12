import { PageIntro } from '../components/ui/PageIntro';

const steps = [
  ['Design', 'Start with the ritual: what should the fire make possible?'],
  ['Fabrication', 'Sheet, section and structure become a physical language.'],
  ['Finishing', 'Surfaces are brought to a tactile, deliberate character.'],
  ['Assembly', 'Parts find their relationship, one measured step at a time.'],
  ['Fire test', 'Every concept has to make sense when it meets a real flame.'],
  ['Ready to burn', 'A fire product leaves the process ready for its next story.'],
];

const values = [
  ['MATERIAL', 'Steel'],
  ['APPROACH', 'Purpose-built'],
  ['LANGUAGE', 'Industrial'],
  ['FOCUS', 'The flame'],
];

export function CraftPage() {
  return (
    <>
      <PageIntro
        label="OUR CRAFT"
        title="From steel"
        accent="to fire."
        copy="The making of an ESFIRE object is a sequence of decisions: how it holds heat, how it lives in a room, and how it feels before it ever burns."
      />
      <section className="shell craft-study">
        <div className="blueprint-card">
          <span className="kicker">ESF / PROCESS STUDY</span>
          <span className="blueprint-degree">24° 11′</span>
          <svg viewBox="0 0 640 450">
            <defs>
              <pattern id="craft-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path
                  d="M32 0H0V32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth=".5"
                  opacity=".18"
                />
              </pattern>
            </defs>
            <rect width="640" height="450" fill="url(#craft-grid)" />
            <path
              d="M100 354h440M136 354V205h368v149M186 354V170h268v184M246 354V228h148v126M286 228v-58h68v58"
              fill="none"
              stroke="currentColor"
              opacity=".55"
            />
            <path
              d="M302 316c-38-38 7-55 15-90 12 32 43 45 38 88-4 27-23 42-46 40-35-3-47-29-35-61 6 17 14 24 28 23Z"
              stroke="#e5590b"
              fill="none"
              strokeWidth="3"
            />
            <text x="75" y="220">AIR</text>
            <text x="510" y="220">HEAT</text>
          </svg>
          <p>
            BLUEPRINT LANGUAGE / A VISUAL PLACEHOLDER FOR THE CRAFT PROCESS, NOT A TECHNICAL DRAWING.
          </p>
        </div>
        <div className="craft-values">
          {values.map(([key, value]) => (
            <div key={key}>
              <span>{key}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="shell sequence">
        <div className="sequence-heading">
          <span className="kicker">THE SEQUENCE / 06 STEPS</span>
          <h2>
            Made with <em>intent.</em>
          </h2>
          <p>
            From first line to first flame, every stage is part of the experience. Manufacturing
            imagery can be added here as the archive grows.
          </p>
        </div>
        <div className="sequence-grid">
          {steps.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
