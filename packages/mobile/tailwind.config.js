/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@monoapp/shared/tailwind.config')],
  theme: {
    extend: {},
  },
  content: [
    '../../packages/shared/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('nativewind/tailwind/native')],
};
