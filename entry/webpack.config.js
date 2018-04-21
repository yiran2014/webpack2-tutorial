 const path =require('path');
// module.exports = {
//   entry:{
// 	  index:'./index.js',
//    	index1:'./index1.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '_[name].js' 
//   }
// };


//webpack2的entry提供了多种配置（字符串、对象、function、promise），让开发者去做处理

//当entry为string时，output中filename解析不到键值对key，所以使用默认的key为main
//let base='./index.js';

//entry为对象
let base={
	indexyy:'./index.js',
	index1:'./index1.js'
}

let base1={
	index1:'./index1.js'
}

//entry为function
const dynamic_entry=()=>base;

//entry为promise
const dynamic_entry_promise=()=>{
	return new Promise((resolve,reject)=>{
		resolve(base1)
	})
}

//console.log(path.resolve(__dirname, 'dist22'));
module.exports={
	entry:dynamic_entry_promise,
	output:{
		path: path.resolve(__dirname, 'dist22'),  //path确定了output存放的地方
		filename:'_[name].js'  //name是占位符，是entry的key
	}
};