/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spin-slow': 'spin 3s linear infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
        'float-reverse': 'float-reverse 18s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-30px) translateX(5px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '33%': { transform: 'translateY(-15px) translateX(-15px) scale(1.05)' },
          '66%': { transform: 'translateY(-25px) translateX(10px) scale(0.95)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(30px) translateX(-20px)' },
        },
      },
    },
  },
  plugins: [],
}