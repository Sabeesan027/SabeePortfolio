import * as React from "react";

export function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const normalized = name.toLowerCase().trim();

  // Next.js
  if (normalized.includes("next.js") || normalized === "nextjs") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 16.5V7.5L16.5 16.5V7.5" />
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className={className}
        aria-hidden="true"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M6 8h6v2H9.5v7H7.5v-7H6V8zM14 11.5c.8-.5 1.7-.8 2.6-.8 1.4 0 2.4.7 2.4 2 0 1.2-.8 1.7-2 2.2l-.7.3c-.9.4-1.3.7-1.3 1.2 0 .5.4.8 1.1.8.8 0 1.5-.3 2.1-.8l.8 1.4c-.8.7-1.8 1.1-3 1.1-2 0-3.1-1.1-3.1-2.5 0-1.4 1-2.1 2.3-2.6l.7-.3c.7-.3 1.1-.6 1.1-1 0-.4-.4-.7-1-.7-.7 0-1.3.3-1.8.7L14 11.5z" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes("javascript")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M8 14.5c0 1.8 1 2.8 2.6 2.8.9 0 1.6-.3 2.1-.7l-.6-1.4c-.4.3-.8.5-1.4.5-.8 0-1.2-.5-1.2-1.4V8.5H7.5v6H8zm6.5-3c.8-.5 1.7-.8 2.6-.8 1.4 0 2.4.7 2.4 2 0 1.2-.8 1.7-2 2.2l-.7.3c-.9.4-1.3.7-1.3 1.2 0 .5.4.8 1.1.8.8 0 1.5-.3 2.1-.8l.8 1.4c-.8.7-1.8 1.1-3 1.1-2 0-3.1-1.1-3.1-2.5 0-1.4 1-2.1 2.3-2.6l.7-.3c.7-.3 1.1-.6 1.1-1 0-.4-.4-.7-1-.7-.7 0-1.3.3-1.8.7L14.5 11.5z" />
      </svg>
    );
  }

  // Kotlin & Android
  if (normalized.includes("kotlin") || normalized.includes("android")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M3 3h18L12 12l9 9H3z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // Framer Motion
  if (normalized.includes("framer")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M4 2h16v7h-8zM4 9h8l8 7H4zM4 16h8v6z" />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M11.927 2c-4.877 0-4.57 2.115-4.57 2.115l.006 2.19h4.636v.656H5.485S2 6.54 2 11.455c0 4.916 3.036 4.743 3.036 4.743h1.81v-2.544s-.098-3.035 2.973-3.035h5.105s2.851.049 2.851-2.766V4.767S18.324 2 11.927 2zm-2.49 1.487a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016zM12.073 22c4.877 0 4.57-2.115 4.57-2.115l-.006-2.19h-4.636v-.656h6.514S22 17.46 22 12.545c0-4.916-3.036-4.743-3.036-4.743h-1.81v2.544s.098 3.035-2.973 3.035h-5.105s-2.851-.049-2.851 2.766v3.088S5.676 22 12.073 22zm2.49-1.487a1.008 1.008 0 1 1 0-2.016 1.008 1.008 0 0 1 0 2.016z" />
      </svg>
    );
  }

  // Django
  if (normalized.includes("django")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M11.146 0h3.325v16.155c-1.57.297-2.736.396-3.882.396-4.04 0-6.177-1.861-6.177-5.405 0-3.473 2.198-5.703 5.485-5.703.495 0 .852.04 1.25.138V0zm0 8.168c-.376-.08-.693-.119-1.07-.119-1.86 0-3.048 1.188-3.048 3.069 0 1.841 1.09 2.97 2.87 2.97.416 0 .753-.04 1.248-.139V8.168zM16.5 6.04h3.325v17.96H16.5V6.04zM16.5 1.545h3.325v3.325H16.5V1.545z" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 12V2" />
        <path d="M12 12l9 5" />
        <path d="M12 12l-9 5" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes("postgres")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M12.001 0c-.23 0-.46.06-.66.19C7.45 2.59 2 8.35 2 14.54c0 4.14 2.59 7.69 6.34 9.11.23.09.47.13.71.13.36 0 .72-.1 1.03-.31l1.92-1.28 1.92 1.28c.31.21.67.31 1.03.31.24 0 .48-.04.71-.13 3.75-1.42 6.34-4.97 6.34-9.11 0-6.19-5.45-11.95-9.34-14.35-.2-.13-.43-.19-.66-.19zm0 2.21c2.99 1.99 7.34 6.84 7.34 12.33 0 3.25-1.99 6.06-4.91 7.15l-2.43-1.62-2.43 1.62c-2.92-1.09-4.91-3.9-4.91-7.15 0-5.49 4.35-10.34 7.34-12.33z" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M4 11V9h2v2H4zm3 0V9h2v2H7zm3 0V9h2v2h-2zm3 0V9h2v2h-2zm-6-3V6h2v2H7zm3 0V6h2v2h-2zm3 0V6h2v2h-2z" />
        <path d="M2 13c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" />
        <path d="M22 13c0 4-3.5 7-10 7S2 17 2 13" />
      </svg>
    );
  }

  // Linux VPS
  if (normalized.includes("linux") || normalized.includes("vps")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8l3 3-3 3" />
        <line x1="12" y1="14" x2="16" y2="14" />
      </svg>
    );
  }

  // Git
  if (normalized.includes("git")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <line x1="6" y1="9" x2="6" y2="15" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    );
  }

  // Security / Shield
  if (normalized.includes("security") || normalized.includes("shield")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  // Database generic
  if (
    normalized.includes("mysql") ||
    normalized.includes("sqlite") ||
    normalized.includes("database")
  ) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // Architecture / System
  if (normalized.includes("architecture") || normalized.includes("system")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    );
  }

  // Default fallback: clean modern tech spark
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
