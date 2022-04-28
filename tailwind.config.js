module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif'],
      },
      padding: {
        '500px': '500px',
      },
      width: {
        '410': '410px',
      },
      maxWidth: {
        '410': '410px',
      },
      gridTemplateColumns: {
        'main': '250px 1fr',
        'sugesstion-grid': '70% 1fr'
      },
      colors:{
        'doc-blue-100': '#5CE1E6',
      },
      backgroundImage: {
        'hero': "linear-gradient(to top, #160d38, #1a124c, #1c1661, #1c1b76, #19208d, #1736a5, #104cbd, #0062d5, #0088e9, #00a8ed, #00c6ea, #5ce1e6)"
      },
      screens: {
        'laptop': '980px',
        'tablet': '730px',
      },
    },
  },
  plugins: [],
}
