/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#f43f5e',
        secondary: '#fde047',
        tertiary: '#fef9c3',
        quaternary: '#64748b'
      },
      fontWeight: {
        medium: 500,
      }
    },
  },
  plugins: [],
}
