/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@monoapp/shared/tailwind.config')],
  theme: {
    extend: {
      colors: {
        'bubble-gum': '#fff',
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography')],
};
