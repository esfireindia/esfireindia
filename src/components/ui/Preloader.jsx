import { useEffect, useState } from 'react';

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
