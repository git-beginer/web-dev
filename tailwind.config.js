/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1120': "1120px",
        '1126': "1126px",
        '962': "962px",
        '800': "800px",
        '619': "619px",
        '551': "551px",
        '505': "505px",
        '495': "495px",
        '416': "416px",
        '302': "302px",
        '244': "244px",
        '192': "192px",
        '175': "175px",
        '104': "104px",
      },
      width:{
        '896': "896px",
      },
      fontFamily: {
        'avenir': "Avenir",
      },
      fontSize: {
        '28': '28px',
        '32': '32px',
        '42': '42px'
      },
      lineHeight: {
        '11': "44px",
        '13': "52px",
        '21': "84px"
      },
      inset: {
        '104': "26rem",
      }
    },
  },
  plugins: [],
}
