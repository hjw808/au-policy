/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e1a',
          800: '#111827',
          700: '#1a1f35',
          600: '#1e293b',
        },
        signal: {
          strong: '#ef4444',
          moderate: '#f97316',
          weak: '#eab308',
          none: '#6b7280',
        }
      }
    },
  },
  plugins: [],
}
