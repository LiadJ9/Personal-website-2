/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'matte-black': '#252525',
        'text-white': '#F4F4F4',
        'darkest-black': '#0C0404',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        typewriter: ['Special Elite', 'Montserrat', 'sans-serif'],
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
