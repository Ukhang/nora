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

  /* Pulse variant */
  .ai-pulse {
    width: var(--s);
    height: var(--s);
    background: var(--c);
    border-radius: 50%;
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  /* Orbit variant */
  .ai-orbit span {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--c);
    border-radius: 50%;
    animation: orbit 1.2s linear infinite;
  }

  .ai-orbit span:nth-child(2) {
    animation-delay:Rum0.2s;
  }

  .ai-orbit span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes orbit {
    to {
      transform: rotate(360deg) translateX(12px);
    }
  }

   /* Drop variant */
  .ai-drop span {
    width: 4px;
    height: 10px;
    margin: 0 2px;
    background: var(--c);
    animation: drop 0.6s infinite ease-in-out;
  }

  .ai-drop span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .ai-drop span:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes drop {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }

   /* Fade variant */
  .ai-fade {
    width: var(--s);
    height: var(--s);
    border-radius: 50%;
    border: 2px solid var(--c);
    opacity: 0.5;
    animation: fade var(--d) linear infinite;
  }

  .ai-dark .ai-fade,
  .ai-system [data-theme='dark'] .ai-fade,
  @media (prefers-color-scheme: dark) {
    .ai-system .ai-fade {
      border-color: var(--c);
    }
  }

  @keyframes fade {
    0% {
      transform: rotate(0deg);
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(360deg);
      opacity: 0.5;
    }
  }

  /* Dual-ring variant */
  .ai-dual-ring {
    display: inline-block;
    width: var(--s);
    height: var(--s);
  }

  .ai-dual-ring:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid var(--c);
    border-color: var(--c) transparent var(--c) transparent;
    animation: spin var(--d) linear infinite;
  }

  .ai-dark .ai-dual-ring:after,
  .ai-system [data-theme='dark'] .ai-dual-ring:after,
  @media (prefers-color-scheme: dark) {
    .ai-system .ai-dual-ring:after {
      border-color: var(--c) transparent var(--c) transparent;
    }
  }

   /* Pulse-ring variant */
  .ai-pulse-ring {
    width: var(--s);
    height: var(--s);
    border-radius: 50%;
    border: 2px solid var(--c);
    animation: pulse-ring 1.2s infinite ease-in-out;
  }

  .ai-dark .ai-pulse-ring,
  .ai-system [data-theme='dark'] .ai-pulse-ring,
  @media (prefers-color-scheme: dark) {
    .ai-system .ai-pulse-ring {
      border-color: var(--c);
    }
  }

  @keyframes pulse-ring {
    0%,
    100% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  /* Bars variant */
  .ai-bars span {
    width: 4px;
    height: 12px;
    margin: 0 1px;
    background: var(--c);
    animation: bars 1s infinite;
  }

  .ai-bars span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .ai-bars span:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes bars {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.5);
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
