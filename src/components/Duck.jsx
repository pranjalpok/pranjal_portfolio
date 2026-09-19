// Small mallard mark used in the nav and hero. Colors come from theme tokens.
export default function Duck({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 21 Q14 30 24 24 Q16 23 8 21Z" fill="rgb(var(--c-wing))" />
      <circle cx="14" cy="13" r="7" fill="rgb(var(--c-mallard))" />
      <rect x="11" y="18.4" width="6" height="2.2" rx="1" fill="#fff" stroke="rgb(var(--c-panel-border))" strokeWidth="0.5" />
      <path d="M19.5 12.2 L27 14 L19.8 16.2Z" fill="rgb(var(--c-bill-tint))" />
      <circle cx="15.6" cy="11.6" r="1.1" fill="rgb(var(--c-ink))" />
    </svg>
  );
}
