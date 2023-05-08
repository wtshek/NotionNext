const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './themes/**/*.js'
  ],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        },
        portfolio: {
          primary: '#fca311',
          secondary: '#14213d',
          gray: '#e5e5e5'
        }
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      },
      keyframes: {
        rotateExpand: {
          '0%': {
            transform: 'rotate(-360deg) scale(0)',
            opacity: 1
          },
          '100%': {
            transform: 'rotate(0deg) scale(1)',
            opacity: 1
          }
        }
      },
      animation: {
        rotateExpand: 'rotateExpand 1s ease-in-out 1'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
