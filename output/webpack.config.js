
const path =require('path');
let base = {
	  index:'./index.js?t=2',
   	  index1:'./index1.js'
};

//个性化输出
module.exports = {
  entry:base,
  output: {
    //导出目录个性化
  	path: path.resolve(__dirname, 'uuudist'),  //path为绝对路径


  	//dist导出给别人用时，包规范格式
  	libraryTarget:'umd',  //包规范，兼容了commonjs规范、amd规范、浏览器
  	library: "MyLibrary", //定义了变量 去拿这个包 var MyLibrary=...
    
    

    //hash和chunkhash的区别
    //hash ==> webpack整个编译过程的hash，每个文件hash都一样
    // chunkhash => webpack对每个文件的hash

    //导出文件个性化
    hashDigestLength:5,  //指定了chunkhash的hash值得位数
    filename: '_[name].js',  
    //以上指定方式也可以直接写成这样  '[chunkhash:3]_[name].js'


    //用来作异步加载时的前缀
    publicPath: "/output/uuudist/", //server-relative  
    //文件名
    chunkFilename:'[chunkhash]_[name].js'

  }
};
