/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        rpr: {
          900: '#020712', // Brand: "Midnight" (Global Background)
          800: '#050815', // Brand: "Ink" (Card Background)
          700: '#1E293B', // Brand: Borders (Slate-800 equivalent)
          teal: '#00E0FF', // Brand: "Cyan" (Proactive State)
          blue: '#0099FF', // Brand: "Electric Blue" (Escalation State)
          red: '#FF3366', // Brand: "Red" (Aggressor/Alert)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
