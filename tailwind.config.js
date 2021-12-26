module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'montserrat': ['Montserrat'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    "./src/**/*.html",
    './src/**/*.js',
],
}
