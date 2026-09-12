import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ArrowLink({ to, children, light = false, outline = false, external = false }) {
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
