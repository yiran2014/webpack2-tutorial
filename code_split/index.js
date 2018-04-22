// export import 
// amd
// require

console.log('I am index')

// require.ensure(dependencies: String[], callback: function(require), chunkName: String)

require('./split');  //通过commonjs的机制拿到split.js
// import * as Test from './split.js';   //webpack2也是原生支持import语法的，webpack1不支持