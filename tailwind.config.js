module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Montserrat']
      },
      colors: {
        primary: { 
          100: '#A19DAF',
          200: '#7A7490',
          300: '#2F2651'
        },
        secondary: '#9672FB'
      },
      dropShadow: {
        '3xl': '54 76px 67px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'shape-pattern': "url('../img/shape.svg')",
      }
    },
  },
  plugins: [],
}
