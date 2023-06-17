/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      '3xl' : '1200px',
      '2xl' : '1200px',
      xl : '1200px',
      lg : '1100px',
      md : '850px',
      sm: '600px',
    },
    container:{
      center : true,
    },
    extend: {
      fontFamily : {
        jetb : ['JetBrains Mono', 'monospace'],
        barlow : ['Barlow', 'sans-serif'],
        backgroundColor:{
          active : 'bg-red-500',
        },
      },
      borderWidth:{
        '1' : '1px'
      },
      spacing:{
        '128' : '32rem',
        '130' : '35rem',
      },
    },
  },
  plugins: [],
}

