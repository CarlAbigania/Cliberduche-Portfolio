/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4f8c',
        secondary: '#e6a019',
        dark: '#2c3e50',
        light: '#f8f9fa',
        gray: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        moveBackground: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s infinite',
        moveBackground: 'moveBackground 20s ease-in-out infinite',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
