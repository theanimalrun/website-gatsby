// https://paletton.com/#uid=70M0u0kw0w0jvDaoOy4y4oODajv

module.exports = {
  // mode: 'jit',
  content: [    "./src/**/*.{js,jsx,ts,tsx}",  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FF9900',
        'yellow': '#FFC500',
        'purple': '#2419B2',
        'blue': '#0D58A6',
        'light-gold': '#FFC164',
        'light-purple': '#665EC5',
        'light-blue': '#5387BD',
        'dark-blue': '#094481',
        'darker-blue': '#063565',
        // '': '#',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography','@tailwindcss/aspect-ratio')],
};
