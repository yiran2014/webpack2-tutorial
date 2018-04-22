一、CommonJS 主要是用于服务器端的规范，比如目前的nodeJS.
根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的。
CommonJS 加载模块是同步的.所以只有加载完成才能执行后面的操作。
像Node.js主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以CommonJS规范比较适用。
但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD  CMD 等解决方案

二、AMD (Asynchromous Module Definition)
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出
AMD异步加载模块。它的模块支持对象 函数 构造器 字符串 JSON等各种类型的模块。
适用AMD规范适用define方法定义模块。
AMD 运行时核心思想是「Early Executing」，也就是提前执行依赖

 

三、CMD  (Common Module Definition)
CMD是SeaJS 在推广过程中对模块定义的规范化产出
CMD和AMD的区别有以下几点：
1.对于依赖的模块AMD是提前执行，CMD是延迟执行。
2.CMD推崇依赖就近，按需加载；AMD推崇依赖前置。


四、UMD
umd是AMD和CommonJS的糅合
AMD 浏览器第一的原则发展 异步加载模块。
CommonJS 模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。
这迫使人们又想出另一个更通用的模式UMD （Universal Module Definition）。希望解决跨平台的解决方案。
UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。
在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。