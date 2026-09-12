export function PageIntro({ number = '01', label, title, accent, copy }) {
  return (
    <section className="shell page-intro reveal">
      <div className="page-number">
        {number} <span>↘</span>
      </div>
      <div className="page-title-block">
        <span className="kicker">{label}</span>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
      </div>
      <p>{copy}</p>
    </section>
  );
}
