/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple-button': '#90267A',
        'test-back': '#9747FF',
        'footer-back': '#CA3BAC',
        'line': '#E645C4'
      },
      backgroundImage: {
        'home-page': "url('/public/Background1.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        'job_cat': '0 5px 5px rgba(0,0,0,0.5)',
        'job_search': '0 5px 30px rgba(231,203,203,1)',
        'job_filters': '0 3px 2px rgba(0,0,0,0.5)',
        'apply-section': '0 1px 1px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}

