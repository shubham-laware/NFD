/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'white':'rgb(255, 255, 255)',
        'custom-bg-gray':'rgb(232, 235, 241)',
        'custom-blue':'rgb(108, 82, 238)',
        'custom-white':'rgb(232, 235, 241)',
        'intro-right-bg':'rgb(2,2,3)',
        'underline-bg':'rgb(225,233,240)' ,
        'nav-bg' :'rgba(55, 49, 69, 0.8)',
        'pre-nav-bg':'rgba(55, 49, 69, 0)'
        },
      textColor:{
        'custom-gray':'rgb(79, 86, 98)',
        'home-font-color':'rgb(23, 23, 23)',
        'nfd.gg-font-color':'rgb(132, 138, 255)',
        'widget-font-color':'rgb(16,17,17)',
        'custom-light-blue':'rgb(108, 82, 238)',
        'intro-rg-nfd-color':'rgb(39,39,80)',
        'right-intro-lg-gray-color':'rgb(131, 131, 131)',
        'spam-color':'rgb(255,255,255)'
      },
      fontFamily:{
        'custom-formular': ['Formular,sans-serif'],
        'syne':['Syne,sans-serif']
      },
      fontWeight:{
        'font-w-500':'500',
        'font-w-400':'400',
        'font-w-700':'700',
      },
      padding:{
        'home-left-p':'72px 64px 115px'
      }
      
    },
  },
  plugins: [],
}

