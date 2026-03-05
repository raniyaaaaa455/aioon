export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3fa',
          100: '#e0e6f5',
          200: '#c0cdeb',
          300: '#a0b4e1',
          400: '#809bd7',
          500: '#6082cd',
          600: '#4069c3',
          700: '#2050b9',
          800: '#0a2472',
          900: '#051a4a',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      spacing: {
        'vh-70': '70vh',
        'vh-50': '50vh',
        'vw-33': '33vw',
      }
    },
  },
  plugins: [],
}