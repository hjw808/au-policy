/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
      },
      colors: {
        wire: {
          bg: '#ffffff',
          surface: '#f9f9f7',
          border: '#e5e5e5',
          'border-light': '#f0f0f0',
          text: '#111111',
          'text-secondary': '#555555',
          'text-tertiary': '#888888',
          'text-faint': '#999999',
        },
        signal: {
          strong: '#dc2626',
          moderate: '#d97706',
          weak: '#9ca3af',
          none: '#d4d4d4',
        },
        party: {
          labor: '#dc2626',
          liberal: '#2563eb',
          nationals: '#ca8a04',
          greens: '#16a34a',
        },
        cat: {
          mining: '#b45309',
          tax: '#1d4ed8',
          health: '#059669',
          energy: '#dc2626',
          housing: '#7c3aed',
          defence: '#475569',
          super: '#4f46e5',
          trade: '#0891b2',
          subsidy: '#be185d',
          privatisation: '#ea580c',
          resources: '#65a30d',
        },
      },
    },
  },
  plugins: [],
}
