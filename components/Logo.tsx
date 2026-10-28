export default function Logo({ size = 42 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" fill="var(--teal)" />
      <path d="M12 40V24a12 12 0 0 1 24 0v16Z" fill="var(--paper)" />
      <path d="M6 12h36l-4 10H10Z" fill="var(--saffron)" />
      <path d="M15 12h6l-1 10h-6Zm12 0h6l2 10h-6Z" fill="var(--paper)" />
    </svg>
  );
}
