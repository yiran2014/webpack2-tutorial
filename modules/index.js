console.log('I am index')

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)
import { split }  from './split';


//class es6特殊语法必须通过babel转码 浏览器才认识
class S {
	constructor(){
		this.a = 'a '
	}
}

alert(new S())
console.log(split);
