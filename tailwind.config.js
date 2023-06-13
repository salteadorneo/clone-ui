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
      },
      animation: {
        'fade-in-scale': 'fadeinscale 1.5s ease-in-out'
      },
      keyframes: {
        fadeinscale: {
          '0%': { transform: 'scale(1.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        }
      }
    }
  },
  safelist: [
    'rounded-none',
    'rounded-md',
    'rounded-lg',
    'rounded-xl',
    'rounded-full',
    'py-1.5',
    'px-2',
    'px-3',
    'px-4',
    'font-medium',
    'font-semibold',
    'scale-50',
    'scale-75',
    'scale-100'
  ],
  plugins: []
}
