/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      cursor:{
        'fancy': 'url(/src/media/white_dot.png), pointer',
      },
      fontFamily: {
        custom: ['BatmanForever', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

