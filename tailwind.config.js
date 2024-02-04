/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'periwinkle': {
          '50': '#eeefff',
          '100': '#dfe1ff',
          '200': '#ccccff',
          '300': '#a5a3fe',
          '400': '#8d7ffa',
          '500': '#7a60f4',
          '600': '#6d43e8',
          '700': '#5f35cd',
          '800': '#4d2ea5',
          '900': '#412c83',
          '950': '#271a4c',
        },
      },      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

