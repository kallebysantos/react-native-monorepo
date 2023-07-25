/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@monoapp/shared/tailwind.config')],
  theme: {
    extend: {},
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
