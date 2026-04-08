/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A84C',
          'gold-light': '#E8C56B',
          'gold-dark': '#A07B2A',
          black: '#0A0A0A',
          dark: '#111111',
          gray: '#1A1A1A',
          'gray-mid': '#2A2A2A',
          'gray-light': '#3A3A3A',
          text: '#E8E8E8',
          muted: '#9A9A9A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Impact', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'hero-title': 'heroTitle 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both',
        'fade-in-delay-1': 'fadeUp 0.7s ease-out 0.4s both',
        'fade-in-delay-2': 'fadeUp 0.7s ease-out 0.65s both',
        'fade-in-delay-3': 'fadeUp 0.7s ease-out 0.9s both',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.22,1,0.36,1) both',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        heroTitle: {
          from: { opacity: '0', transform: 'translateY(40px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-4deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
};
