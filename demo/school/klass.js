// 使用require函数来加载模块，不用担心在代码里调用require会影响全局的命名空间，
// 因为node里面就没有全局命名空间这个概念，如果模块存在并且任何语法等这种初始化的错误，
// require函数就会返回这个模块对象（exports）。可以把这个对象赋值给任何的局部变量
var student = require('./student.js')
var teacher = require('./teacher.js')

// 指定一个老师cici : teacher.add('cici')


// 实现班级的方法
function add(teacherName,students) {

	// 使用模块——“teacher.add('cici')” 
	teacher.add(teacherName); 

	// 一个班级有好多学生，用forEach这个方法遍历每个学生;item当前数组里的学生名；index下标
	students.forEach(function(item,index){
	student.add(item);


	})
}

// 如果你想让你的模块成为一个特别的对象类型就使用“module.exports”（支持存在的东西；这个模块最终返回的module.exports给调用者）,
// 如果希望你的模块成为一个传统的模块实例那就使用“exports.add”（是module.exports他的辅助方法；exports挂载属性和方法，
// 然后把属性再赋给module.exports）,如果module.exports已经有了属性，那expoets上的就会被忽略，
// 推荐使用expotrs这种方式，除非你想把你的模块类型从传统的模块实例修改为其他的 。
exports.add=add;  
