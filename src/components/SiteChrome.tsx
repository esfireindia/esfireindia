import { ArrowUpRight, Camera, Menu, X } from 'lucide-react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { whatsappBase } from '../data/products';

const navItems = [
  ['Home', '/'],
  ['Products', '/products'],
  ['Our Craft', '/craft'],
  ['Applications', '/applications'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const;

export function ArrowLink({
  to,
  children,
  light = false,
  outline = false,
  external = false,
}: PropsWithChildren<{ to: string; light?: boolean; outline?: boolean; external?: boolean }>) {
  const className = `arrow-link${light ? ' arrow-link--light' : ''}${outline ? ' arrow-link--outline' : ''}`;
  if (external) {
    return (
      <a className={className} href={to} target="_blank" rel="noreferrer">
        {children} <ArrowUpRight size={15} />
      </a>
    );
  }
  return (
    <Link className={className} to={to}>
      {children} <ArrowUpRight size={15} />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header shell">
      <Link to="/" className="brand" aria-label="ESFIRE INDIA home">
        <span className="brand-mark">E</span>
        <span>ESFIRE <em>INDIA</em></span>
      </Link>
      <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Primary navigation">
        {navItems.map(([label, path]) => (
          <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <a className="mobile-quote" href={whatsappBase} target="_blank" rel="noreferrer">
          Get a quote <ArrowUpRight size={15} />
        </a>
      </nav>
      <a className="header-quote" href={whatsappBase} target="_blank" rel="noreferrer">
        Get a quote <ArrowUpRight size={15} />
      </a>
      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <span className="footer-logo">ESFIRE</span>
          <span>INDIA</span>
          <small>ENGINEERED FOR FIRE</small>
        </div>
        <div className="footer-column">
          <span className="kicker">EXPLORE</span>
          {navItems.slice(1).map(([label, path]) => (
            <Link key={path} to={path}>{label}</Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <span className="kicker">START A CONVERSATION</span>
          <a href={whatsappBase} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} /></a>
          <a href="mailto:contact@esfire.in">contact@esfire.in</a>
          <a href="https://instagram.com/esfire.india" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram <Camera size={14} /></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© ES FIRE INDIA / BUILT AROUND FIRE</span>
        <span>JALANDHAR, PUNJAB, INDIA&nbsp; / INFORMATION SUBJECT TO CONFIRMATION</span>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

export function SiteLayout({ children }: PropsWithChildren) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function PageIntro({
  number = '01',
  label,
  title,
  accent,
  copy,
}: {
  number?: string;
  label: string;
  title: string;
  accent: string;
  copy: string;
}) {
  return (
    <section className="shell page-intro reveal">
      <div className="page-number">{number} <span>↘</span></div>
      <div className="page-title-block">
        <span className="kicker">{label}</span>
        <h1>{title}<br /><em>{accent}</em></h1>
      </div>
      <p>{copy}</p>
    </section>
  );
}

export function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);
  if (!visible) return null;
  return (
    <div className="preloader" aria-hidden="true">
      <span>ESFIRE INDIA</span>
      <span>IGNITING EXPERIENCE... 01</span>
      <span>ENGINEERED FOR FIRE ∞</span>
    </div>
  );
}
