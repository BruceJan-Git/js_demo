/**
 * 1. ECMAscript是js的规范,主要包括js基本语法和基本数据类型
 * 2. js输入输出,输入? 就是赋值,定义变量,(通俗理解为...写准备要运行的代码),就是输入 输出?.log() .alert() .write() .pormpt() .confirm()
 * 3. 变量,就是存取数据的一个容器,使用 var let 关键字定义变量
 * 4. 数据类型:简单类型,复合/复杂数据类型
 * 5. 运算符/操作符
 * 6. js语句:条件判断,循环
 * 7. 数组
 * 8. 函数
 * 9. 对象
 */
/**************************************** 求num_tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttf66666666666666666666666666666666666666666666666666666666666666666666666的值 ****************************************/
/**
 * 1. number++ 先赋值,再自增一
 * 2. ++number 先自增一,再赋值
 * 3. 后边的变量会替换前边的变量,同一变量名,再内存中只有一份
 */

/**
 * 10 12 12 ==> num = 12; sum = 34
 * 12 13 14 ==>num = 14 sum 39
 */
// var num = 10;
// var sum = num++ + ++num + num;
// var sum = num++ + num + ++num; 
// console.log(num, sum)


/**************************************** 取值会保留有效数字 ****************************************/
/**
 * 1. toFixed()保留几位有效数字
 * 2. 其数据类型为string
 */
// var a = '3.3' - '2.2'
// console.log(a)
// console.log(a.toFixed(5))
// console.log(typeof (a.toFixed(5)))


/**************************************** 一个while循环 ****************************************/
// while (res != 'y') {
//   var res = prompt('are you ok ?', 'y/n')

//   // if (res == 'y') {
//     // console.log('ok')
//   // } else if (res == 'n'){
//     // alert('are you sure ?')
//   // }

//   res == 'y' ? console.log('ok') : alert('are you sure ?')
// }


/**************************************** while和do_while的区别 ****************************************/
/**
 * 1. while循环先进行条件判断,再执行代码块中的代码
 * 2. do while 会执行一编代码块中的代码,再进行循环(条件判断)
 * 3. do while 会多执行一次代码
 */
// var i = 101
// while (i <= 100) {
//   document.write(i + ' ')
//   i++
// }

// var i = 101
// do {
//   document.write(i)
//   i++
// } while (i <= 100)


/**************************************** 一个标题标签的for循环 ****************************************/
// for (var i = 1; i <= 6; i++) {
//   document.write(`<h${i}>h${7 - i}</h${i}>`)
// }


/**************************************** 数组遍历求和_取最大值_等等 ****************************************/
// var array = [1, 2, 3, 4]
// var odd_Array = []
// var sum = 0
// var max = array[0]
// var maxIndex = 0
// for (var index = 0; index < array.length; index++) {
//   var element = array[index];

//   // 求和
//   sum += element

//   // 求偶数
//   if (element % 2 == 0) {
//     odd_Array[odd_Array.length] = element
//   }

//   // 求最大值和其索引
//   if (max < array[index]) {
//     max = array[index]
//     maxIndex = index
//   }
// }
// console.log(sum)
// console.log(odd_Array)
// console.log(element, maxIndex)

/**************************************** 二维数组 ****************************************/
/**
 * 1. 数组中的某一值为一个数组
 * 2. 二维数组的遍历
 */
// var array = [[1, 2, 3], [4, 5, 6, 1, 2]]
// var sum = 0
// for (var index = 0; index < array.length; index++) {
//   var element = array[index];
//   for (var j = 0; j < array[index].length; j++) {
//     var element = array[index][j];
//     console.log(typeof element)
//     sum += element
//   }
// }
// console.log(sum)

/**************************************** 创建一个数组 ****************************************/
/**
 * 1. 字面量形式创建数组
 * 2. 通过Array()构造函数创建数组
 * 3. 空数组不等于空数组
 * 4. 当new Array() 值为一个时,表示创建几个空值,其值并不等于几个undefined
 */
// var arr = []
// var newArr = new Array(3, 1, 1, 2, 3, 3)
// var newArr = new Array(2)
// 
// newArr.forEach((item, index, arr) => {
// console.log(item, index) // 此处并不会输出任何信息
// })
// 
// for (var index = 0; index < newArr.length; index++) {
// var element = newArr[index]
// console.log(element)
// }

/**************************************** 数组的属性 ****************************************/
/**
 * 1. 数组的长度 arr.length
 * 2. 数组的索引 arr[number] 数组的索引属性使用[]的形式访问其值
 * 3. 对象的属性访问方式有哪些 obj.的方式 obj['']的方式,当对象的属性名为数字时,其属性值可一obj[]的形式访问
 * 4. 如何给一个数组赋值(筛选出一个数组中的奇数偶数,反转一个数组)
 * 5. 给一个空数组赋值 arr[arr.length]数组赋值
 * 6. 一个数组的最后一个值 arr[arr.length-1]
 */
// var arr = [1,2,3]
// console.log(arr.length) // 数组的长度
// console.log(arr[0]) // 数组值的访问
// console.log(arr[3]) // 数组值的访问 没有该值的时候为undefined

// var obj = { name: 'zx', 3: '文斯莫克·山治' }
// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj[3])

// var arr = [1, 2, 3, 4]
// var oddArr = []
// var evenArr = []
// var reverseArr = []
// for (var i = 0; i < arr.length; i++) {
// var element = arr[i];
// if (element % 2 == 0) {
// oddArr[oddArr.length] = element
// } else {
// evenArr[evenArr.length] = element
// }
// }
// for (var i = arr.length - 1; i >= 0; i--) {
// var element = arr[i];
// reverseArr[reverseArr.length] = element
// }
// console.log(oddArr)
// console.log(evenArr)
// console.log(reverseArr)

/**************************************** 冒泡排序 ****************************************/
/**
 * 1. 数组中的值进行排序
 * 2. 调换的趟数 arr.length - 1
 * 3. 比较的次数 arr.length - 调换的趟数
 */
// var arr = [1, 2, 3, 4, 5, 6, 6, 6, 4]
// for (var index = 0; index < arr.length; index++) {
// var element = arr[index];console.log(element)
// console.log(element)
// }
// for (var i = 0; i <= arr.length - 1; i++) { // i表示比较的趟数
// for (var j = 0; j < arr.length - i; j++) { // j表示比较的次数     // j = 1; j <= arr.length - i; j++
// if (arr[j] < arr[j + 1]) {
// var order = arr[j]
// arr[j] = arr[j + 1]
// arr[j + 1] = order
// }
// }
// }
// console.log(arr)

// function fn(arr) {
//   for (var index = 0; index < arr.length; index++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[j + 1]) {
//         var order = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = order
//       }
//     }
//   }
//   console.log(arr)
// }
// var arr = [1, 2, 3, 4, 5]
// fn(arr)

// function getMax(a, b) {
//   if (a < b) {
//     console.log(b)
//   }
// }
// var num1 = prompt('请输入第一个数')
// var num2 = prompt('请输入第二个数')
// getMax(num1, num2)

// function fn(year) {
//   if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//     console.log('闰年')
//   } else {
//     console.log('不是闰年')
//   }
// }
// fn(1900)

/**************************************** 函数作用域以及function声明的函数存在预解析 ****************************************/

// console.log(a);
// function a() {
// console.log('a')
// }
// var a = 1
// console.log(a)

// var obj = {
// name: 'zx',
// age: 12,
// sayHi: function() {
// // console.log('hello')
// return 'hello'
// }
// }
// console.log(obj.name, obj.age, obj.sayHi())

/**************************************** 创建对象 ****************************************/
/**
 * 1. 字面量创建对象
 * 2. 构造函数创建对象
 * 3. 工厂模式创建对象
 * 4. 自定义构造函数创建对象
 */

// var obj = {
// name: 'zx',
// age: 12,
// sayHi: function () {
// return "hello"
// }
// }

// var obj = new Object() // new Array()
// obj.name = 'zx'
// obj.age = 12
// obj.sayHi = function fn() {
// return 'hello'
// }
// console.log(obj.sayHi())

// function creatObj(name, age, fn) {
// var obj = new Object()
// obj.name = name
// obj.age = age
// obj.fn = function () {
// return 'hello'
// }
// return obj
// }
// var obj1 = creatObj('zx', 12)
// console.log(obj1.fn())

/**
 * · 创建一个空的简单JavaScript对象（即{}）；
 * · 链接该对象（即设置该对象的构造函数）到另一个对象 ；
 * · 将步骤1新创建的对象作为this的上下文 ；
 * · 如果该函数没有返回对象，则返回this。
 */

// function Obj(name, age, fn) {
//   this.name = name
//   this.age = age
//   this.fn = function () {
//     return this.name + 'sayHi'
//   }
// }
// var obj = new Obj('zx', 12)
// console.log(obj.fn())
// for (key in obj) {
//   console.log(obj[key])
// }

/**************************************** arguments参数 ****************************************/
/**
 * 1. arguments 参数可以看成一个为数组
 * 2. arguments参数在函数参数不确定的情况下使用(也就是它有一个或多个值==>伪数组)
 */
// function fn() {
//   var maxNum = arguments[0]
//   for (var index = 0; index < arguments.length; index++) {
//     if (maxNum < arguments[index]) {
//       maxNum = arguments[index]
//     }
//   }
//   return maxNum
// }
// var re = fn(1,2,34)
// console.log(re)

/**************************************** new关键字的的理解 ****************************************/
/**
 * 1. 创建一个空对象=>this
 * 2. 向该对象中添加属性和方法
 * 3. 最后返回this对象的过程
 */
// var obj = {}
// function fnB() {
//   return obj
// }
// function fnA() {
//   return obj
// }
// var obj1 = new fnA()
// var obj2 = new fnB()
// console.log(obj1 === obj2)

/**************************************** Math对象 ****************************************/
/**
 * 1. Math.random() 取0-1随机数,可以取到0,取不到1
 * 2. Math.floor/ceil/round/abs/max/min/pow...
 * 3. 取任意整数之间的随机数
 * 4. Math.floor(Math.random()*(max - min + 1) + min)
 * 5. Math.parseInt(Math.random()*(max - min + 1) + min, 10)
 */

// for (var i = 0; i < 100; i++) {
//   function getRandom(min, max) {
//     var res = parseInt(Math.random() * (max - min + 1) + min, 10) //6 + 10
//     console.log(res)
//   }
//   getRandom(0, 1)
// }
// var res = parseInt(Math.random() * (20 - 10 + 1) + 10, 10) //6 + 10
// console.log(res)

// function getRandomRgba() {
//   var red = parseInt(Math.random() * 256, 10)
//   var yellow = parseInt(Math.random() * 256, 10)
//   var green = parseInt(Math.random() * 256, 10)
//   document.body.bgColor = `rgb(${red},${yellow},${green})`
// }
// getRandomRgba()

// var toString = Object.prototype.toString
// console.log(toString.call(new Date))

// function getTime(date) {
//   var date = new Date()
//   var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var d = date.getDate()
//   var hours = date.getHours()
//   var seconds = date.getSeconds()
//   var minutes = date.getMinutes()

//   month = month < 10 ? `0${month}` : `${month}`
//   d = d < 10 ? `0${d}` : `${d}`
//   hours = hours < 10 ? `0${hours}` : `${hours}`
//   seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
//   minutes = minutes < 10 ? `0${minutes}` : `${minutes}`

//   var time = `${year}-${month}-${d} ${hours}:${seconds}:${minutes}`

//   console.log(time)
// }
// getTime()
