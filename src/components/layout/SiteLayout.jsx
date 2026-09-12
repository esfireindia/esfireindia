import { ArrowUpRight, Camera, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { whatsappBase } from '../../data/products';

const navItems = [
  ['Home', '/'],
  ['Products', '/products'],
  ['Our Craft', '/craft'],
  ['Applications', '/applications'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`site-header shell${isHome ? ' site-header--hero' : ''}`}>
      <Link to="/" className="brand" aria-label="ESFIRE INDIA home">
        <span className="brand-mark">E</span>
        <span>
          ESFIRE <em>INDIA</em>
        </span>
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
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
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
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <span className="kicker">START A CONVERSATION</span>
          <a href={whatsappBase} target="_blank" rel="noreferrer">
            WhatsApp <ArrowUpRight size={15} />
          </a>
          <a href="mailto:contact@esfire.in">contact@esfire.in</a>
          <a
            href="https://www.instagram.com/esfireindia"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram <Camera size={14} />
          </a>
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

export function SiteLayout({ children }) {
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
