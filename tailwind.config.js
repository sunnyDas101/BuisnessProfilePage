/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navBg': '#eceffd',
        'navBtnBg' : '#37b5eb',
        'indexBg': "#bdc7e8",
        'primary': "#6a5cdb",
        'secondary': "hsla(212, 80%, 56%, 0.74);"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

