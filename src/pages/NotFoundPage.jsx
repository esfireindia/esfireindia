import { ArrowLink } from '../components/ui/ArrowLink';

export function NotFoundPage() {
  return (
    <section className="shell not-found">
      <span className="kicker">404 / LOST IN THE SMOKE</span>
      <h1>That fire isn’t here.</h1>
      <ArrowLink to="/">RETURN HOME</ArrowLink>
    </section>
  );
}
