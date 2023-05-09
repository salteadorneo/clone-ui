/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        quinary: 'var(--color-quinary)',
        senary: 'var(--color-senary)'
      }
    }
  },
  safelist: [
    'rounded-none',
    'rounded-md',
    'rounded-lg',
    'rounded-xl',
    'rounded-full'
  ],
  plugins: []
}
