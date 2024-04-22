/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'matte-black': '#252525',
        secondary: '#00ff00',
      },
      fontSize: {
        base: '1em',
        lg: '1.3em',
        xl: '1.6em',
        xxl: '2em',
      },
    },
  },
  plugins: [],
};
