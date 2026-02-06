/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08377C',
        secondary: '#80D12A',
        accent: '#0F4AA1',
        dark: '#10243E',
        light: '#F8F8F8',
        gray: '#6C7A89',
        success: '#2E9E4D',
        danger: '#D94141',
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
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(128, 209, 42, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(128, 209, 42, 0.6)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s infinite',
        moveBackground: 'moveBackground 20s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInUp: 'slideInUp 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        bounceIn: 'bounceIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        scaleUp: 'scaleUp 0.5s ease-out forwards',
        glow: 'glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        gradientShift: 'gradientShift 4s ease-in-out infinite',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'premium': '0 20px 40px -10px rgba(8, 55, 124, 0.15)',
        'glow-primary': '0 0 20px rgba(8, 55, 124, 0.3)',
        'glow-secondary': '0 0 20px rgba(128, 209, 42, 0.3)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
      },
    },
  },
  plugins: [],
}
