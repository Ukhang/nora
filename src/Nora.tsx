import React from 'react';

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
};

const css = ``;

export const Nora = ({
    variant = 'spinner',
    size = 20,
    color = '#0a0a0a',
    className = '',
    duration = 1000,
    theme = 'system'
}: Props) => {
    <div>
    
    </div>
};
