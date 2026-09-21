import { ArrowUpRight, Camera, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { whatsappBase } from '../../data/products';
import { mediaUrl } from '../../utils/media';
import { SeoManager } from '../SeoManager';
import { CursorFollower } from '../motion/CursorFollower';
import { MotionController } from '../motion/MotionController';

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
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frameId = null;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 90) {
        setIsScrollVisible(false);
        lastScrollY.current = currentScrollY;
      } else if (delta <= -4) {
        setIsScrollVisible(true);
        lastScrollY.current = currentScrollY;
      } else if (delta >= 4) {
        setIsScrollVisible(false);
        setOpen(false);
        lastScrollY.current = currentScrollY;
      }

      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header
      className={`site-header shell${isHome ? ' site-header--hero' : ''}${
        isScrollVisible ? ' is-scroll-visible' : ''
      }`}
    >
      <Link to="/" className="brand" aria-label="ESFIRE INDIA home">
        <span className="brand-mark">E</span>
        <span>
          ESFIRE <em>INDIA</em>
        </span>
      </Link>
      <nav
        className={`main-nav${open ? ' is-open' : ''}`}
        aria-label="Primary navigation"
      >
        {navItems.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <a
          className="mobile-quote"
          href={whatsappBase}
          target="_blank"
          rel="noreferrer"
        >
          Get a quote <ArrowUpRight size={15} />
        </a>
      </nav>
      <a
        className="header-quote"
        href={whatsappBase}
        target="_blank"
        rel="noreferrer"
      >
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
        <div className="footer-column">
          <span className="kicker">EXPLORE</span>
          {navItems.slice(1, 5).map(([label, path]) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="kicker">ENQUIRIES</span>
          <Link to="/contact">Contact</Link>
          <a href={whatsappBase} target="_blank" rel="noreferrer">
            WhatsApp <ArrowUpRight size={15} />
          </a>
          <a href="mailto:contact@esfire.in">contact@esfire.in</a>
        </div>
        <div className="footer-column footer-contact">
          <span className="kicker">CONNECT</span>
          <a
            href="https://www.instagram.com/esfireindia"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram <Camera size={14} />
          </a>
          <Link to="/">Home</Link>
          <span className="footer-location">Jalandhar, Punjab, India</span>
        </div>
        <div className="footer-column">
          <span className="kicker">LEGAL</span>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      <div className="footer-fire-stage">
        <div className="footer-fire-art">
          <img
            className="footer-fire-image"
            src={mediaUrl('/assets/footer-fire-exact.png')}
            alt="ESFIRE in fire"
          />
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>WOOD-FIRE EQUIPMENT / EST. 2026</span>
        <span>ENGINEERED FOR COOKING, WARMTH &amp; GATHERING</span>
        <span>© 2026 ESFIRE INDIA</span>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (window.__esfireLenis) {
      window.__esfireLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return null;
}

export function SiteLayout({ children }) {
  const progressRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${progress})`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <SeoManager />
      <MotionController />
      <CursorFollower />
      <div className="page-transition" aria-hidden="true">
        <span>ESFIRE / ENGINEERED FOR FIRE</span>
      </div>
      <div className="scroll-progress" ref={progressRef} />
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
