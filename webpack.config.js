
var root  = __dirname

module.exports = {
  
  entry: root + '/src/index.js',
  output: {
    path: root + '/dist',
    pathinfo: true,
    publicPath: '/',
    filename: 'bundle.js'
  }
}