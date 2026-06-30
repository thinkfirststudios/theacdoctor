/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B5FA5',
          navy: '#0A2540',
          red: '#D62828',
          offwhite: '#F7F9FB',
          slate: '#5B6B7B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(10, 37, 64, 0.12)',
        cardhover: '0 12px 32px -8px rgba(10, 37, 64, 0.22)',
      },
      keyframes: {
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeup: 'fadeup 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
