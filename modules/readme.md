webpack是基于module的构建工具，以为每个文件都是一个模块，每个模块会在module.rules走一遍
module.rule是个数组，数组里面是一个个对象
对象主流有三个key：test（数组）、use、exclude
test 用于正则判断模块是否需要处理  满足条件则 查看exclude的node_modules是否有  如果没有则使用use进行babel编译 进行预处理（babel形式转码后浏览器才认识）