console.log('I am index')

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)

//用来作异步加载
require.ensure([],(require)=>{
	require('./index1.js')
},'dynamic')