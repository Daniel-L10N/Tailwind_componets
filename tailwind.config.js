/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        negro: '#000',
        tahiti:{
          100: '#cffafe',
        }
      }
    },
  },
  plugins: [],
}

