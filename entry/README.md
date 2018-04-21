#### entry的使用
1.entry的形式可以是字符串，对象，function，promise
2.output中必须指定webpack编译后文件存放的地方path，否则它怎么知道文件存放哪里呢
3.output中也必须指定webpack编译后新的文件名称，[name]是占位符，一般来说是对象的key值
  如果不是对象而是字符串的话，则name默认为main