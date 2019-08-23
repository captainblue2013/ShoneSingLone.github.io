module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    /*  index2: {
       entry: 'src/main2.js',
       template: 'public/index.html',
       filename: 'index2.html'
     } */
  },
  lintOnSave: false,
  runtimeCompiler: true
}