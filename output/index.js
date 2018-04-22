console.log('I am index')

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)

//require.ensure形式像amd，用来作异步加载
require.ensure([],(require)=>{
	require('./index1.js')  //动态加载依赖的模块
},'dynamic')  //指定文件名