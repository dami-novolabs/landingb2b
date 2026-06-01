import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        novo: {
          black:       '#0A0A0A',
          'near-black':'#141414',
          charcoal:    '#2A2A2A',
          graphite:    '#5C5C5C',
          mid:         '#8A8A8A',
          line:        '#E5E1D9',
          cream:       '#F5F2EC',
          'cream-50':  '#FAF8F3',
          white:       '#FFFFFF',
          accent:      '#FF3A20',
          'accent-h':  '#E5311B',
          success:     '#1E5F3D',
          warn:        '#A6571C',
        },
      },
      fontFamily: {
        display: ['"PP Editorial New"', 'Tiempos Headline', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-l':  ['56px', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-m':  ['42px', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-s':  ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-xl':    ['21px', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
        'body-l':     ['18px', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
        'body-m':     ['16px', { lineHeight: '1.55' }],
        'body-s':     ['14px', { lineHeight: '1.55' }],
        'mono-s':     ['13px', { lineHeight: '1',    letterSpacing: '0.04em' }],
        'mono-xs':    ['11px', { lineHeight: '1',    letterSpacing: '0.08em' }],
      },
      maxWidth: {
        narrow: '880px',
        text:   '720px',
      },
      spacing: {
        section:    '128px',
        'section-m':'80px',
      },
    },
  },
  plugins: [],
}

export default config
