/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./components/**/*.{js,ts,jsx,tsx}", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          red: '#E63946',
          'red-dark': '#C1121F',
          blue: '#1D3557',
          'blue-dark': '#162a45',
          yellow: '#F4D35E',
          'yellow-dark': '#D4A30E',
          black: '#1a1a1a',
          gray: '#f5f5f5',
          'light-gray': '#e5e5e5',
          cream: '#FDFBF7',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231D3557' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.1' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
