# javaScript学习
 ![img](/publice/img_1.png)


## 一 为什么要学习 JS
JS 是当前最流行、应用最广泛的客户端脚本语言，在 Web 开发领域有着举足轻重的地位，是成为一名优秀前端工程师的必备技能之一。

相比于其它编程语言，学习 JS 有以下几个优势：
```
    JavaScript 是最流行的客户端脚本语言，有着简单易学的特点。学有所成后，您可以使用一些基于 JavaScript 的框架（例如 JQuery、Node.js）来开发前端或后端应用程序；
    JavaScript 可以在 Web 浏览器中运行，因此学习 JavaScript，您不需要配置任何特殊的运行环境；
    JavaScript 的应用非常广泛，例如移动应用开发、桌面应用开发、Web 游戏开发等都会用到 JavaScript，为 JavaScript 程序员提供了更多的就业机会；
    JavaScript 有着大量的优质框架和库，借助这些框架和库可以大大减少您的开发时间。    
```
## 二 JS 可以做什么?
JavaScript 可以用于 Web 开发的各个领域
```
1.Web 应用开发：日常生活中我们所浏览的网页都是由 HTML、CSS、JavaScript 构成的，通过 JavaScript 可以实时更新网页中元素的样式，并可以实现人与网页之间的交互（例如监听用户是否点击了鼠标或按下了某个按键等），还可以在网页中添加一些炫酷的动画；
2.移动应用开发：除了可以进行 Web 应用开发外，JavaScript 还可以用来开发手机或平板电脑上的应用程序，而且我们还可以借助一些优秀的框架（例如 React Native），让开发更加轻松；
3.Web 游戏：我们在网页中玩过的那些小游戏，都可以使用 JavaScript 来实现；
```

## 三 开始学习JavaScript基础
    在学习javaSCript之前,你应该熟悉基本的 HTML 和 CSS
### 变量是什么
一个变量，就是一个用于存放数值的容器。这个数值可能是一个用于累加计算的数字，
或者是一个句子中的字符串。
变量的独特之处在于它存放的数值是可以改变的。
让我们看一个简单的累加例子
```html
    <button >a</button>
```
```js
    var a = 1
   var button = document.querySelector('button')
        button.onclick = function () {
            a++
        }
```
你可以想象一下如果没有变量，一个简单的累加写法会变得极为复杂，这样做显然是低效率和不可行的。
<br />
变量的另一个特性就是它们能够存储任何的东西 -- 不只是字符串和数字。
变量可以存储更复杂的数据，甚至是函数。你将在后续的内容中体验到这些用法。
<br />
我们说，变量是用来存储数值的，那么有一个重要的概念需要区分。变量不是数值本身，它们仅仅是一个用于存储数值的容器。
你可以把变量想象成一个个用来装东西的袋子。
<h3>声明变量</h3>
要想使用变量，你需要做的第一步就是创建它 -- 更准确的说，是声明一个变量。
声明变量的语法是在var关键字后面加上这个变量的名字
<p>写法</p>

```
     var a = 1;
     var b ;
```
<p>你可以通过使用变量的方式来验证这个变量的数值是否在执行环境中已经存在</p>
可以看出b变量没有值所以b变量是一个空容器。当你输入变量b并回车后，你会得到一个undefined的返回值。
如果他们并不存在的话，那你就会得到一个报错信息。不信的话，可以尝试输入：

```js
    c ;
```
记住: 千万不要把两个概念弄混淆了，“一个变量存在，但是没有数值”和“一个变量并不存在”他们完全是两回事 ， 在前面你看到的盒子的类比中，不存在意味着没有可以存放变量的“盒子”。
没有定义的值意味着有一个“盒子”，但是它里面没有任何值。
<h3>变量类型</h3>
可以为变量设置不同的数据类型。本节我们将对其进行简短的介绍，在以后的文章中，你会更详细地了解它们。
<h3>Number</h3>

```js
    var a = 1
```
你可以在变量中存储数字，不论这些数字是像 30（也叫整数）这样，或者像 2.456 这样的小数（也叫做浮点数）。
与其他编程语言不同，在 JavaScript 中你不需要声明一个变量的类型。
当你给一个变量数字赋值时，不需要用引号括起来。
<h3>String</h3>

```js
    var b = '1'
```
字符串是文本的一部分。当你给一个变量赋值为字符串时，你需要用单引号或者双引号把值给包起来，
否则 JavaScript 将会把这个字符串值理解成别的变量名。

<h3>Boolean</h3>

```js
    var c = true
```
Boolean 的值有 2 种：true 或 false。它们通常被用于在适当的代码之后，测试条件是否成立。

<h3>Array</h3>

```js
    var d = []
```
数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔。

<h3>Object</h3>

```js
    var e = {}
```
在编程中，对象是现实生活中的模型的一种代码结构。
您可以有一个简单的对象，代表一个停车场，并包含有关其宽度和长度的信息，
或者您可以有一个代表一个人的对象，并包含有关他们的名字，身高，体重，他们说什么语言，如何说 你好，他们，等等。

<h4> 到目前为止，您应该了解了一些 JavaScript 变量以及如何创建它们。 </h4>

### 数字和操作符
基本的计算机知识，对 HTML 和 CSS 初步了解，知道 JavaScript 是什么。
<h3>算术运算符</h3>
算术运算符是我们用来做和的基本运算符 如下表所示:

| 运算符 | 名称  | 作用                               | 示例     | 
|-----|-----|----------------------------------|--------|
| +   | 加法  | 两个数相加                            | 1 + 1  |   
| -   | 减法  | 两个数相减                            | 1 - 1  |  
| *   | 乘法  | 两个数相乘                            | 1 * 1  |  
| /   | 除法  | 右边的数除左边的数                        | 1 / 1  | 
| %   | 取余  | 在你将左边的数分成同右边数字相同的若干整数部分后，返回剩下的余数 | 1 % 1  | 
| **  | 幂   | 取底数的指数次方，即指数所指定的底数相乘             | 1 ** 1 | 

你以后有时候会看到参与算术计算的数字被称为 操作数

### 判断语句 if/else
if/else 语句在指定的条件为 true 时，执行代码块。如果条件为 false，会执行另外一个代码块。
- if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码。
- else 语句 如果 if 语句的条件为false，则执行该代码块
- else if 语句 - 检测一个新的条件，如果第一个条件为false
<h3>示例:</h3>

```js
    var a = true
        if(a){
            console.log('a')
        }else {
            console.log('b')
        }
```

### 循环吧，代码
编程语言可以很迅速方便地帮我们完成一些重复性的任务，从多个基本计算到几乎完成了很多类似工作的其他情况。
现在我们来看看处理这种需求的 JavaScript 中可用的循环结构。

<h3>来一起循环</h3>

让我们来想一下下图，这位农夫考虑为他的家庭做一周的食物计划，他或许就需要执行一段循环：
![image](/publice/img_2.png)
一段循环通常需要一个或多个条件：
- **一个开始条件，**它被初始化为一个特定的值 - 这是循环的起点 ("开始：我没有食物”，上面）。
- **一个结束条件，**这是循环停止的标准 - 通常计数器达到一定值。 以上所说的“我有足够的食物”吗？假设他需要 10 份食物来养活他的家人。
- **一个迭代器，**这通常在每个连续循环上递增少量的计数器，直到达到退出条件。我们以前没有明确说明，但是我们可以考虑一下农民能够每小时收集 2 份食物。每小时后，他收集的食物量增加了两倍，他检查他是否有足够的食物。如果他已经达到 10 分（退出条件），他可以停止收集回家。

<h3>举个例子</h3>
 ```js
 loop(food = 0; foodNeeded = 10) {
    if (food = foodNeeded) {
        exit loop;
        // 我们有足够的食物了，回家吧。
    } else {
        food += 2; // 花一个小时多收集两个食物。
        // 循环将会继续执行。
    }
}
 ```
所以需要的食物量定为 10，农民目前的数量为 0。在循环的每次迭代中，我们检查农民的食物量是否等于他需要的量。如果是这样，我们可以退出循环。如果没有，农民花一个小时收集两部分食物，循环再次运行。

<h2>循环的标准</h2>
我们开始探索一些特定的循环结构。第一个，你会经常使用到它，for 循环 - 以下为 for 循环的语法：
```js
for (initializer; exit-condition; final-expression) {
    // code to run
}
```
1. 关键字for，后跟一些括号。
2. 在括号内，我们有三个项目，以分号分隔：
   一个初始化器 - 这通常是一个设置为一个数字的变量，它被递增来计算循环运行的次数。它也有时被称为计数变量。
   一个退出条件 - 如前面提到的，这个定义循环何时停止循环。这通常是一个表现为比较运算符的表达式，用于查看退出条件是否已满足的测试。
   一个最终条件 - 这总是被判断（或运行），每个循环已经通过一个完整的迭代消失时间。它通常用于增加（或在某些情况下递减）计数器变量，使其更接近退出条件值。
3. 一些包含代码块的花括号 - 每次循环迭代时都会运行这个代码。


### while 语句
当然for 不是 JavaScript 中唯一可用的循环类型。
实际上还有很多其他的，而现在你不需要理解所有这些，所以值得看几个人的结构，
这样你就可以在稍微不同的方式识别出相同的功能。
<br />
我们来看看 while 循环。这个循环的语法如下所示：
```js
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```
除了在循环之前设置初始化器变量，并且在运行代码之后，循环中包含 final-expression，而不是这两个项目被包含在括号中，这与以前的 for 循环非常类似。退出条件包含在括号内，前面是 while 关键字而不是 for。
<br />

同样的三个项目仍然存在，它们仍然以与 for 循环中相同的顺序定义 - 这是有道理的，因为您必须先定义一个初始化器，然后才能检查它是否已到达退出条件; 在循环中的代码运行（迭代已经完成）之后，运行最后的条件，这只有在尚未达到退出条件时才会发生。
## javaScript 进阶 ES6
ES6是ECMAScript 6.0的简称 是指javaScript 2015 以后开发出的新特性,我这里指做简略概括详情请去[《ES6》](https://es6.ruanyifeng.com/)

### 新的变量 let

此时，您可能会想：“为什么我们需要三个关键字来定义变量？”，“为什么有 var 和 let 呢？"。

原因是有些历史性的。回到最初创建 JavaScript 时，是只有 var 的。在大多数情况下，这种方法可以接受，但有时在工作方式上会有一些问题——它的设计会令人困惑或令人讨厌。因此，let 是在现代版本中的 JavaScript 创建的一个新的关键字，用于创建与 var 工作方式有些不同的变量，解决了过程中的问题。

首先，如果你编写一个声明并初始化变量的多行 JavaScript 程序，你可以在初始化一个变量之后用 var 声明它，它仍然可以工作。例如：

```js
myName = 'Chris';

function logName() {
    console.log(myName);
}''

logName();

var myName;

```
这是由于变量的提升

但提升操作不再适用于 let 。如果将上面例子中的 var 替换成 let 将不起作用并引起一个错误。这是一件好事——因为初始化后再声明一个变量会使代码变得混乱和难以理解。

其次，当你使用 var 时，可以根据需要多次声明相同名称的变量，但是 let 不能。

### 块级作用域
ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

例如: 内层变量可能会覆盖外层变量。
```js
    var tmp = new Date();
    function f() {
      console.log(tmp);
      if (false) {
        var tmp = 'hello world';
      }
    }
    f(); // undefined
```
上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。

还有就是用来计数的循环变量泄露为全局变量
```js
    var s = 'hello';
    for (var i = 0; i < s.length; i++) {
      console.log(s[i]);
    }
    console.log(i); // 5
```
上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。

<h3>ES6 的块级作用域</h3>
let实际上为 JavaScript 新增了块级作用域。
```js
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
```
上面的函数有两个代码块，都声明了变量n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。

### 箭头函数
ES6 允许使用“箭头”（=>）定义函数。
```js
var f = v => v;
// 等同于
var f = function (v) {
  return v;
};
```
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
```js
var f = () => 5;
// 等同于
var f = function () { return 5 };
var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```
切记箭头函数没有this
### 数组的扩展
```js
Array.from() // 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
Array.of()  // Array.of方法用于将一组值，转换为数组。
Array.find() // 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
Array.findIndex() // 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
Array.fill() // fill方法使用给定值，填充一个数组。
Array.map() // 遍历整个数组 返回一个符合要求的新数组
```
<h3>扩展运算符(...)</h3>

扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```js
console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

### 对象扩展

<h3>属性的简洁表示法</h3>
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
```js
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}
// 等同于
const baz = {foo: foo};
```
<h3> Object.fromEntries()</h3>
Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。

```js
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```
该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。

<h3> Object.assign()</h3>
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

```js
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

