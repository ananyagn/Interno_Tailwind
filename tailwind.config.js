/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        screens: {
          xs: '480px',
          xl2: '1440px',
        },
        animation: {
        "textreveal": "text-reveal 4s ease-in-out 0.5s forwards", // 3s delay
      },
      keyframes: {
        "text-reveal": {
          "0%": {  opacity: "0" },
          "100%": {  opacity: "1" },
        },
      },
      


    
      },

    },
  
    plugins: [],
  };