/* var arr1 = Array(5);
arr1[1]=100
console.log(arr1);

var arr2 = [100];
// arr2.length = 8;
// console.log(arr2.length)
arr2[1]=200
console.log(arr2); */

/* 1、let */
// 不可重复声明
let l1 = 't'
// let l1 = 't'
var v1 = 't'
var v1 = 'tt'
console.log(v1)

// 块作用域
{
  var girl = 'C#'
  let boy = 'unity'
}
console.log(girl)
// console.log(boy)   // 报错

/* 2、解构赋值 */
// 数组
const F4 = ['unity','vue','jQuery','npm']
let [u,v,j,n] = F4
console.log(u + ' ' + v + ' ' + j + ' ' + n)
// 对象
const unity = {
  name: 'unity',
  makeGames: function(){
    console.log('Made with Unity~')
  }
}
let {name,makeGames} = unity
console.log(name + ' ' + makeGames)
makeGames()

/* 3、模板字符串 */
let action = `周星驰、
              邓超`
console.log(`${action}是我最喜欢的演员~`)

/* 对象的简化写法 */
let name1 = 'oMing'
let fun1 = function(){
  console.log("fun1")
}
let obj1 = {
  name1,
  fun1,
  improve(){
  }
}

/* 箭头函数 */
let fun2 = function(){
  console.log(this.name)
}
let fun22 = () => {
  console.log(this.name)
}
window.name = 'oMing'
// fun2()
// fun22()
let people = {name: 'Vue'}
fun2.call(people)
// 'this是静态的'
fun22.call(people)

// 点击div1，延迟来秒改变颜色
let div1 = document.getElementById('div1')
div1.addEventListener('click',function(){
  setTimeout(() => {
    this.style.background = 'pink'
  },2000)
})

// 返回偶数
const arr = [1,6,8,9,12]
console.log(arr.filter(item => item % 2 == 0))

/* 扩展运算符 */
const arr3 = ['unity','google','vue']
function web(){
  console.log(arguments)
}
web(...arr3)
//数组的合并
const oVuex = ['v','u','e','x']
const oVue_cli = ['c','l','i']
console.log([...oVuex,...oVue_cli])
//数组的克隆
const oVue = ['v','u','e']
const oVueClone = [...oVue]
//将伪数组变为真正的数组
let divs = document.querySelectorAll('div')
console.log([...divs])

/* rest参数 */
function data(a,b,...args){
  console.log(a)
  console.log(b)
  console.log(args)
}
data(1,2,3,4,5,6)

/* let a={n: 12}
let b=a
b.n=13
console.log(`n: ${a.n}`); */

/* let a={n: 12}
let b=a
b = {
  n: 13
}
console.log(`n: ${a.n}`); */

let a={n: 1}
let b=a
// 先计算成员访问 a.x
a.x = a = {n: 2}
console.log(`a.x: ${a.x}`);
console.log(`b: ${b.n}  ${b.x.n}`);

let arr1 = [12,23]
function fn(y){
  y[0] = 100
  y = [100]
  y[1] = 200
  console.log(y);
}
fn(arr1)
console.log(arr1);

var x = 4
function y(j,k,x){
  console.log(x);
  arguments[2] = 10
  console.log(x);
}
x = y(1,2,3)
console.log(x);