/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue': '#1678cb',
      'light-blue': '#3b8bea',
      'lemonade': '#68d6f5',
      'black': '#242424',
      'white': '#fff',
      'gray':'#7E7E7E',
      'red': '#f00'
    },
     fontSize: {
      sm: ['12px', '15px'],
      md: ['14px', '17px'],
      medium: ['15px', '18px'],
      base: ['16px', '19px'],
      lg: ['20px', '24px'],
      xl: ['36px', '42px'],
    },
    extend: {
      screens:{
        mobile: '500px'
      },
      boxShadow:{
        'xl':'1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25)'
      },
    },
  },
  plugins: [],
}
