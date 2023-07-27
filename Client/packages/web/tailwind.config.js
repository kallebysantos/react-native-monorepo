/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@monoapp/shared/tailwind.config.js')],
  theme: {
    extend: {
      colors: {
        'bubble-gum': '#fff',
      },
    },
  },
  content: [
    '../../packages/shared/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('nativewind/tailwind/css'),
  ],
};
