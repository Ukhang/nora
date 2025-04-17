import React, { useEffect } from 'react';

type Variant =
  | 'spinner'
  | 'dots'
  | 'pulse'
  | 'orbit'
  | 'drop'
  | 'fade'
  | 'dual-ring'
  | 'pulse-ring'
  | 'bars'
  | 'ripple'
  | 'rolling'
  | 'wave';
type Theme = 'light' | 'dark' | 'system';

interface Props {
  variant?: Variant;
  size?: number;
  color?: string;
  className?: string;
  duration?: number;
  theme?: Theme;
}

const css = `
  /* Root styles */
  .ai-root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    --s: 24px;
    --c: #0a0a0a;
    --d: 1000ms;
  }

  /* Theme handling */
  .ai-dark,
  .ai-system [data-theme='dark'],
  @media (prefers-color-scheme: dark) {
    .ai-system {
      --c: #fff;
    }
  }

  /* Base span styles */
  .ai-root span {
    display: block;
    background: var(--c);
    border-radius: 50%;
  }

  /* Spinner variant */
  .ai-spinner {
    width: var(--s);
    height: var(--s);
    border: 2px solid transparent;
    border-top-color: var(--c);
    border-radius: 50%;
    animation: spin var(--d) linear infinite;
  }

  .ai-dark .ai-spinner,
  .ai-system [data-theme='dark'] .ai-spinner,
  @media (prefers-color-scheme: dark) {
    .ai-system .ai-spinner {
      border-top-color: var(--c);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Dots variant */
  .ai-dots span {
    width: 6px;
    height: 6px;
    margin: 0 2px;
    animation: blink 1.4s infinite both;
  }

  .ai-dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .ai-dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0%,
    80%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

export const Nora = ({
  variant = 'spinner',
  size = 20,
  color = '#0a0a0a',
  className = '',
  duration = 1000,
  theme = 'system',
}: Props) => {
  useEffect(() => {
    if (!document.getElementById('nora-css')) {
      const style = document.createElement('style');
      style.id = 'nora-css';
      style.textContent = css;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className={`ai-root ai-${variant} ${
        theme === 'system' ? 'ai-system' : `ai-${theme}`
      } ${className}`}
      style={
        {
          '--s': `${size}px`,
          '--c': color,
          '--d': `${duration}ms`,
        } as React.CSSProperties
      }
      aria-label="Loading..."
    >
      {['dots', 'orbit', 'drop', 'bars', 'wave'].includes(variant) && (
        <>
          <span />
          <span />
          <span />
        </>
      )}
      {['ripple', 'rolling'].includes(variant) && (
        <>
          <span />
          <span />
        </>
      )}
    </div>
  );
};
