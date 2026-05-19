/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jt: {
          gold:       '#C9963A',
          'gold-lt':  '#E8BB6A',
          'gold-dk':  '#9A6E20',
          cream:      '#FAF6EF',
          'cream-dk': '#F0EAD6',
          'cream-warm':'#F5EBD7',
          stone:      '#D4C5A9',
          bark:       '#5C3D1E',
          espresso:   '#2C1A0E',
          forest:     '#1B3025',
          'forest-lt':'#274736',
          charcoal:   '#141414',
          'charcoal-lt':'#222222',
          text:       '#141414',
          'text-lt':  '#3A3A3A',
          muted:      '#8A7D6B',
          teal:       '#1A6B5A',
          'teal-lt':  '#22896F',
          white:      '#FFFFFF',
        },
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"Jost"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'editorial-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '0' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        'section': 'clamp(5rem, 10vw, 10rem)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        marquee:  { from: { transform:'translateX(0)' }, to: { transform:'translateX(-50%)' } },
        float:    { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-14px)' } },
        shimmer:  { '0%': { backgroundPosition:'-200% center' }, '100%': { backgroundPosition:'200% center' } },
        fadeUp:   { from: { opacity:'0', transform:'translateY(30px)' }, to: { opacity:'1', transform:'none' } },
        scaleIn:  { from: { opacity:'0', transform:'scale(.9)' }, to: { opacity:'1', transform:'none' } },
      },
      animation: {
        'marquee':  'marquee 35s linear infinite',
        'float':    'float 6s ease-in-out infinite',
        'shimmer':  'shimmer 3s linear infinite',
        'fade-up':  'fadeUp .8s cubic-bezier(.16,1,.3,1) both',
        'scale-in': 'scaleIn .8s cubic-bezier(.16,1,.3,1) both',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
