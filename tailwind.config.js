/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        fredoka: ['"Fredoka One"', 'cursive'],
      },
      colors: {
        purple: {
          light: '#c8b6ff',
          mid: '#a78bfa',
          dark: '#7c3aed',
        },
        navy: {
          DEFAULT: '#1e1b4b',
          soft: '#312e81',
        },
        yellow: {
          light: '#fef9c3',
          DEFAULT: '#fde68a',
        },
        green: {
          light: '#bbf7d0',
          mid: '#86efac',
        },
        orange: {
          light: '#fed7aa',
          mid: '#fdba74',
        },
        peach: '#fecdd3',
        bluelight: '#bfdbfe',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '32px',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out infinite 0.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
