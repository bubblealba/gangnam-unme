/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': 'rgb(var(--color-white) / <alpha-value>)',
        'black': 'rgb(var(--color-black) / <alpha-value>)',
        'red': 'rgb(var(--color-red) / <alpha-value>)',
        'canary-yellow': 'rgb(var(--color-canary-yellow) / <alpha-value>)',
        'electric-green': 'rgb(var(--color-electric-green) / <alpha-value>)',
        'dark-gray': 'rgb(var(--color-dark-gray) / <alpha-value>)',
      },
      screens: {
        'mobile': {'max': '500px'},
      },
    },
  },
  plugins: [],
}
