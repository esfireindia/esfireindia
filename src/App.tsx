import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  Flame,
  Layers3,
  Mail,
  Phone,
  Ruler,
} from 'lucide-react';
/* oxlint-disable next/no-img-element */
import { SyntheticEvent, useMemo, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { ArrowLink, PageIntro, Preloader, SiteLayout } from './components/SiteChrome';
import { applicationOptions, finderOptions, products, whatsappBase } from './data/products';

function ProductCard({ product, compact = false }: { product: (typeof products)[number]; compact?: boolean }) {
  return (
    <Link to={`/products/${product.slug}`} className={`product-card${compact ? ' product-card--compact' : ''}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={`${product.name} by ESFIRE INDIA`} />
        <span className="product-category">{product.category}</span>
        <span className="view-product">View product <ArrowUpRight size={15} /></span>
      </div>
      <div className="product-card-meta">
        <span>{product.number} / {product.eyebrow}</span>
        <h3>{product.name}</h3>
        <p>{product.cardCopy}</p>
      </div>
    </Link>
  );
}

function EngineeringDiagram() {
  const steps = [
    ['01', 'AIR', 'Fuelled by a considered path'],
    ['02', 'COMBUSTION', 'Where the burn begins'],
    ['03', 'HEAT', 'The warmth you feel'],
    ['04', 'EXHAUST', 'A cleaner visual story'],
  ];
  return (
    <div className="engineering-grid shell">
      <div className="engineering-copy">
        <div className="section-index">04</div>
        <span className="kicker">FIRE, UNDERSTOOD</span>
        <h2>Control the fire.<br /><em>Don’t just burn it.</em></h2>
        <p>A visual language for the relationship between fuel, air, combustion and warmth. Exact configurations are confirmed model by model.</p>
      </div>
      <div className="diagram-card">
        <span className="kicker">CONCEPT / AIRFLOW RELATIONSHIP</span>
        <svg viewBox="0 0 560 300">
          <title>Illustrative airflow diagram</title>
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth=".45" opacity=".14" />
            </pattern>
          </defs>
          <rect width="560" height="300" fill="url(#grid)" />
          <path d="M82 238h396M132 238V135h296v103M185 238V102h190v136M235 238V153h90v85M265 153V118h30v35" fill="none" stroke="currentColor" strokeWidth="2" opacity=".55" />
          <path d="M256 214c-25-22-4-38 5-54 8 22 36 33 30 64-4 21-18 32-36 31-25-1-38-20-30-42 6 10 15 14 31 1Z" fill="none" stroke="#e5590b" strokeWidth="3" />
          <path d="M58 185h84M418 185h84M280 72V116" stroke="#e5590b" strokeWidth="2" strokeDasharray="4 6" />
          <text x="28" y="180">AIR</text><text x="475" y="180">HEAT</text><text x="245" y="54">EXHAUST</text>
        </svg>
        <div className="diagram-steps">
          {steps.map(([num, title, copy]) => (
            <div key={num}><span>{num}</span><strong>{title}</strong><small>{copy}</small></div>
          ))}
        </div>
        <p className="fine-print">ILLUSTRATIVE FIRE-ENGINEERING LANGUAGE. PRODUCT CONFIGURATIONS AND TECHNICAL PERFORMANCE SHOULD BE CONFIRMED FOR EACH MODEL.</p>
      </div>
    </div>
  );
}

function Finder() {
  const [selected, setSelected] = useState(2);
  const recommended = products.find((product) => product.slug === finderOptions[selected].slug)!;
  return (
    <section className="finder shell">
      <div className="finder-heading">
        <span className="kicker">FIND YOUR FIRE / 05</span>
        <h2>What kind of fire are you looking for?</h2>
        <p>A starting point, not a specification sheet. Choose a feeling and we’ll point you towards a model.</p>
      </div>
      <div className="finder-grid">
        <div className="finder-options">
          {finderOptions.map((option, index) => (
            <button key={option.label} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)}>
              <span>0{index + 1}</span>
              <strong>{option.label}</strong>
              <small>{option.copy}</small>
              <ArrowRight size={19} />
            </button>
          ))}
        </div>
        <Link to={`/products/${recommended.slug}`} className="finder-result">
          <img src={recommended.image} alt={recommended.name} />
          <span className="kicker">YOUR DIRECTION / {recommended.category.toUpperCase()}</span>
          <h3>{recommended.name}</h3>
          <span className="result-arrow"><ArrowUpRight size={20} /></span>
        </Link>
      </div>
    </section>
  );
}

function Home() {
  const featured = products.slice(0, 3);
  const reasons = [
    ['Cook', 'Traditional cooking. Modern engineering.', products[1].image],
    ['Warm', 'Comfort for colder evenings.', products[4].image],
    ['Gather', 'Designed around shared moments.', products[2].image],
    ['Explore', 'Built for outdoor experiences.', products[3].image],
  ];
  return (
    <>
      <Preloader />
      <section className="hero shell">
        <div className="hero-copy">
          <span className="kicker">ESFIRE INDIA / 001 — EST. FOR FIRE</span>
          <h1>Where fire<br /><em>meets</em><br />engineering.</h1>
          <p>Premium tandoors, fire stoves, smokeless fire pits and outdoor fire solutions — engineered for warmth, cooking and unforgettable gatherings.</p>
          <div className="button-row">
            <ArrowLink to="/products">EXPLORE PRODUCTS</ArrowLink>
            <ArrowLink to={whatsappBase} external outline>TALK TO US</ArrowLink>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/fireview.avif" alt="ESFIRE glass-front fire stove with a visible flame" />
          <div className="image-caption"><span>FIREVIEW / GLASS-FRONT</span><span>01 — 05</span></div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>JALANDHAR / PUNJAB / INDIA</span></div>
      </section>

      <section className="reason-section shell">
        <div className="section-heading split-heading">
          <div><span className="section-index">02</span><span className="kicker">THE REASON WE MAKE</span><h2>Fire is more<br /><em>than heat.</em></h2></div>
          <p>It cooks. It gathers. It gives a room a pulse. ESFIRE products are made for the moments that happen around a considered flame.</p>
        </div>
        <div className="reason-grid">
          {reasons.map(([title, copy, image]) => (
            <article key={title} className="reason-card"><img src={image} alt={`${title} fire experience`} /><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>

      <section className="collection-section shell">
        <div className="section-heading collection-heading">
          <div><span className="section-index">03</span><span className="kicker">THE COLLECTION</span><h2>Purpose-built products.<br />Raw fire. <em>Refined engineering.</em></h2></div>
          <p>A small, focused collection of fire products for inside, outside, and everywhere in between.</p>
        </div>
        <div className="featured-products">{featured.map((product) => <ProductCard product={product} compact key={product.slug} />)}</div>
        <div className="center-link"><ArrowLink to="/products" outline>VIEW THE FULL COLLECTION</ArrowLink></div>
      </section>

      <EngineeringDiagram />

      <section className="outdoor-feature">
        <img src="/assets/bonfire.avif" alt="Smokeless bonfire pit glowing at dusk" />
        <div className="outdoor-overlay shell">
          <span className="kicker">OUTDOOR / 03</span>
          <h2>Gather around fire.<br /><em>Not smoke.</em></h2>
          <p>Cozy up with friends and family around our smokeless fire pit, designed for chilly nights and outdoor gatherings.</p>
          <ArrowLink to="/products/smokeless-bonfire-18" light>EXPLORE SMOKELESS BONFIRE</ArrowLink>
        </div>
      </section>

      <Finder />
      <CallToAction />
    </>
  );
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <div><span className="kicker">START A CONVERSATION / 07</span><h2>Ready to light<br /><em>it up?</em></h2></div>
        <div><p>Have a product in mind, a custom requirement, or simply want to know more?</p><div className="button-row"><ArrowLink to={whatsappBase} external light>WHATSAPP US</ArrowLink><ArrowLink to="/contact" light outline>SEND AN ENQUIRY</ArrowLink></div></div>
      </div>
    </section>
  );
}

function Products() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Tandoor', 'Fire Stove', 'Bonfire', 'Rocket Stove'];
  const visible = filter === 'All' ? products : products.filter((product) => product.category === filter);
  return (
    <>
      <section className="shell products-hero">
        <span className="kicker">COLLECTION / 05 PRODUCTS</span>
        <div><h1>The ESFIRE<br /><em>collection.</em></h1><p>Purpose-built products for cooking, warming, gathering and moving through the outdoors. Explore the current static catalogue.</p></div>
      </section>
      <section className="shell product-catalogue">
        <div className="filter-row" aria-label="Product categories">
          {filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
        <div className="catalogue-grid">{visible.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        <div className="catalogue-cta"><div><span className="kicker">NEED A SPECIFIC BUILD?</span><p>Talk to us about your application, space or custom requirement.</p></div><ArrowLink to="/contact">START A CONVERSATION</ArrowLink></div>
      </section>
    </>
  );
}

function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  if (!product) return <NotFound />;
  const images = [product.image, product.alternateImage];
  const whatsApp = `https://wa.me/919876543210?text=${encodeURIComponent(`Hi ES Fire India, I'm interested in ${product.name}. Please share more details.`)}`;
  return (
    <>
      <section className="shell product-detail">
        <Link className="back-link" to="/products"><ArrowLeft size={15} /> BACK TO COLLECTION</Link>
        <div className="product-gallery">
          <div className="gallery-main"><img src={images[selectedImage]} alt={`${product.name} product view`} /><span>0{selectedImage + 1} / 02</span></div>
          <div className="gallery-thumbs">{images.map((image, index) => <button className={selectedImage === index ? 'active' : ''} onClick={() => setSelectedImage(index)} key={image}><img src={image} alt={`${product.name} thumbnail ${index + 1}`} /></button>)}</div>
        </div>
        <div className="product-summary">
          <span className="kicker">{product.number} / {product.eyebrow} &nbsp;/&nbsp; {product.category.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="button-row"><ArrowLink to={whatsApp} external>ENQUIRE ON WHATSAPP</ArrowLink><ArrowLink to="/contact" outline>GET A QUOTE</ArrowLink></div>
          <div className="application-list"><span className="kicker">APPLICATIONS</span><div>{product.applications.map((app) => <span key={app}><Check size={15} />{app}</span>)}</div></div>
        </div>
      </section>
      <section className="spec-section">
        <div className="shell spec-inner"><div><span className="kicker">SPECIFICATIONS / STATIC CATALOGUE</span><h2>Details are where the fire becomes a product.</h2><p>Confirmed dimensions, finishes and fuel configurations will be added as the product catalogue is finalised.</p></div><div className="spec-grid">{product.specs.map(([key, value]) => <div key={key}><span>{key}</span><strong>{value}</strong></div>)}</div></div>
        <div className="shell fine-print">STATIC FRONTEND CATALOGUE / &nbsp; INFORMATION SUBJECT TO CONFIRMATION</div>
      </section>
    </>
  );
}

function Craft() {
  const steps = [
    ['Design', 'Start with the ritual: what should the fire make possible?'],
    ['Fabrication', 'Sheet, section and structure become a physical language.'],
    ['Finishing', 'Surfaces are brought to a tactile, deliberate character.'],
    ['Assembly', 'Parts find their relationship, one measured step at a time.'],
    ['Fire test', 'Every concept has to make sense when it meets a real flame.'],
    ['Ready to burn', 'A fire product leaves the process ready for its next story.'],
  ];
  return (
    <>
      <PageIntro label="OUR CRAFT" title="From steel" accent="to fire." copy="The making of an ESFIRE object is a sequence of decisions: how it holds heat, how it lives in a room, and how it feels before it ever burns." />
      <section className="shell craft-study">
        <div className="blueprint-card"><span className="kicker">ESF / PROCESS STUDY</span><span className="blueprint-degree">24° 11′</span><svg viewBox="0 0 640 450"><defs><pattern id="craft-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".18" /></pattern></defs><rect width="640" height="450" fill="url(#craft-grid)"/><path d="M100 354h440M136 354V205h368v149M186 354V170h268v184M246 354V228h148v126M286 228v-58h68v58" fill="none" stroke="currentColor" opacity=".55"/><path d="M302 316c-38-38 7-55 15-90 12 32 43 45 38 88-4 27-23 42-46 40-35-3-47-29-35-61 6 17 14 24 28 23Z" stroke="#e5590b" fill="none" strokeWidth="3"/><text x="75" y="220">AIR</text><text x="510" y="220">HEAT</text></svg><p>BLUEPRINT LANGUAGE / A VISUAL PLACEHOLDER FOR THE CRAFT PROCESS, NOT A TECHNICAL DRAWING.</p></div>
        <div className="craft-values">{[['MATERIAL','Steel'],['APPROACH','Purpose-built'],['LANGUAGE','Industrial'],['FOCUS','The flame']].map(([key,value])=><div key={key}><span>{key}</span><strong>{value}</strong></div>)}</div>
      </section>
      <section className="shell sequence"><div className="sequence-heading"><span className="kicker">THE SEQUENCE / 06 STEPS</span><h2>Made with <em>intent.</em></h2><p>From first line to first flame, every stage is part of the experience. Manufacturing imagery can be added here as the archive grows.</p></div><div className="sequence-grid">{steps.map(([title,copy], index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    </>
  );
}

function Applications() {
  const [selected, setSelected] = useState(0);
  const current = applicationOptions[selected];
  return (
    <>
      <PageIntro label="APPLICATIONS" title="Where fire" accent="belongs." copy="The right fire product is less about a room and more about what you want the room to become." />
      <section className="shell applications-grid">
        <div className="application-buttons">{applicationOptions.map((item,index)=><button className={selected===index?'active':''} onClick={()=>setSelected(index)} key={item.label}><span>0{index+1}</span><strong>{item.label}</strong><small>{item.copy}</small></button>)}</div>
        <Link to={`/products/${current.slug}`} className="application-result"><img src={current.image} alt={`${current.label} fire application`} /><div><span className="kicker">SELECTED / {current.label.toUpperCase()}</span><h2>{current.copy}</h2></div><span className="result-arrow"><ArrowUpRight size={21}/></span></Link>
      </section>
    </>
  );
}

function About() {
  const tiles = [
    [Factory, 'Manufacturing', 'Fire products made close to the material and the process.'],
    [Ruler, 'Product design', 'A quieter, more useful kind of visual language.'],
    [Layers3, 'Fabrication', 'Structure, surface and function considered together.'],
    [Flame, 'Fire products', 'Objects made for cooking, warmth and gathering.'],
  ] as const;
  return (
    <>
      <PageIntro label="ABOUT ESFIRE INDIA" title="We build" accent="around fire." copy="ESFIRE INDIA is a fire-product brand combining practical fire experiences with modern fabrication and product design." />
      <section className="shell about-grid"><div className="about-statement"><h2>A fire product should feel as considered before the flame as it does after.</h2><p>We’re starting with a focused family of tandoors, fire stoves, bonfire pits and compact fire solutions. No inflated claims — just a clear ambition to make fire objects that work hard and live well.</p></div><div className="about-tiles">{tiles.map(([Icon,title,copy])=><article key={title}><Icon size={22}/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="shell about-ending"><h2>The catalogue is growing.<br /><em>The point of view stays clear.</em></h2><ArrowLink to="/contact">TALK TO ESFIRE</ArrowLink></section>
    </>
  );
}

function Contact() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  async function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true); setStatus('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/enquiries', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setStatus(data.message); form.reset();
    } catch (error) { setStatus(error instanceof Error ? error.message : 'Could not send the enquiry.'); }
    finally { setSending(false); }
  }
  return (
    <>
      <PageIntro label="CONTACT ESFIRE INDIA" title="Ready to light" accent="it up?" copy="Have a product in mind, a custom requirement, or simply want to know more? Leave a note and we’ll take it from there." />
      <section className="shell contact-grid">
        <div className="contact-panel"><span className="kicker">START HERE</span><h2>Fire is a conversation.</h2><div className="contact-links"><a href={whatsappBase} target="_blank" rel="noreferrer"><Check/>WhatsApp us<ArrowUpRight/></a><a href="tel:+911140005678"><Phone/>+91 11 4000 5678</a><a href="mailto:contact@esfire.in"><Mail/>contact@esfire.in</a><span><Flame/>Jalandhar, Punjab, India</span></div><p className="fine-print">CONTACT DETAILS SHOWN ARE CONFIGURABLE PLACEHOLDERS UNTIL CONFIRMED.</p></div>
        <form className="enquiry-form" onSubmit={submit}><label>NAME<input name="name" placeholder="Your name" required /></label><label>EMAIL<input type="email" name="email" placeholder="you@company.com" required /></label><label>I’M INTERESTED IN<select name="interest" defaultValue="Choosing a product"><option>Choosing a product</option><option>A custom requirement</option><option>Hospitality / projects</option><option>Just saying hello</option></select></label><label>PHONE (OPTIONAL)<input name="phone" placeholder="+91 ..." /></label><label className="full">MESSAGE<textarea name="message" placeholder="Tell us what you’re imagining..." required /></label><div className="form-foot"><span>We’ll only use your details to respond to this enquiry.</span><button disabled={sending}>{sending ? 'SENDING...' : 'SEND AN ENQUIRY'} <ArrowUpRight size={15}/></button></div>{status && <output className="form-status" aria-live="polite">{status}</output>}</form>
      </section>
    </>
  );
}

function NotFound() {
  return <section className="shell not-found"><span className="kicker">404 / LOST IN THE SMOKE</span><h1>That fire isn’t here.</h1><ArrowLink to="/">RETURN HOME</ArrowLink></section>;
}

export default function App() {
  const routes = useMemo(() => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/craft" element={<Craft />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  ), []);
  return <SiteLayout>{routes}</SiteLayout>;
}
