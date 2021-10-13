// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend:{
      colors: {
        navCol:

        {
50: '#e4f5ff',
100: '#bdddf4',
200: '#2B3148',
300: '#6bafe2',
400: '#4698da',
500: '#307fc1',
600: '#246296',
700: '#18466c',
800: '#0b2a42',
900: '#000f1a',
},
heartCol:
{


  50: '#ffe4f8',
  100: '#feb6e1',
  200: '#f887cb',
  300: '#f458b4',
  400: '#ef2a9f',
  500: '#d51085',
  600: '#a70868',
  700: '#79044a',
  800: '#4a002d',
  900: '#1e0012',

}
}
 },
  },
  variants: {
    extend: {},
    },
  

  plugins: [],
 }