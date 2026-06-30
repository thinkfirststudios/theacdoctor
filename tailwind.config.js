/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B5FA5',
          bluelight: '#2E8BD8',
          navy: '#0A2540',
          red: '#D62828',
          orange: '#F77F00',
          orangelight: '#FFA231',
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
        cardhover: '0 18px 40px -10px rgba(10, 37, 64, 0.28)',
        warm: '0 10px 26px -8px rgba(247, 127, 0, 0.45)',
        cool: '0 10px 26px -8px rgba(11, 95, 165, 0.45)',
      },
      backgroundImage: {
        warm: 'linear-gradient(120deg, #FFA231 0%, #F77F00 45%, #D62828 100%)',
        cool: 'linear-gradient(120deg, #2E8BD8 0%, #0B5FA5 55%, #0A2540 100%)',
        brandmix: 'linear-gradient(120deg, #0B5FA5 0%, #2E8BD8 40%, #F77F00 100%)',
        'navy-glow':
          'radial-gradient(circle at 20% 10%, rgba(46,139,216,0.25), transparent 45%), radial-gradient(circle at 85% 90%, rgba(247,127,0,0.22), transparent 45%)',
      },
      keyframes: {
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        gradientshift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '60%, 100%': { transform: 'translateX(220%)' },
        },
        pulsering: {
          '0%': { boxShadow: '0 0 0 0 rgba(247,127,0,0.45)' },
          '70%': { boxShadow: '0 0 0 14px rgba(247,127,0,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(247,127,0,0)' },
        },
        spinslow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeup: 'fadeup 0.5s ease-out both',
        floaty: 'floaty 4.5s ease-in-out infinite',
        gradient: 'gradientshift 8s ease infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        pulsering: 'pulsering 2.2s ease-out infinite',
        spinslow: 'spinslow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
