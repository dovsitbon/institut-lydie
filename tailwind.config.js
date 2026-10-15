/** Config Tailwind — compilée dans index.html par `node build.mjs` */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2EC',
        nude: '#EFE4D8',
        pearl: '#FBF9F6',
        line: '#E6DCD0',
        ink: '#2A211C',
        muted: '#7A6E66',
        wood: { DEFAULT: '#3B2A20', light: '#5A4134' },
        fuchsia: { deep: '#A0195A', soft: '#F6E3EC', ink: '#7E1046' }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Jost', '"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(59,42,32,.04), 0 12px 32px -12px rgba(59,42,32,.12)',
        lift: '0 2px 4px rgba(59,42,32,.05), 0 24px 48px -16px rgba(59,42,32,.18)'
      }
    }
  }
};
