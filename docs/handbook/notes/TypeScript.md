# typeScript
![img](/publice/img_3.png)

本文章是根据TypeScript 中文手册来编写的，详情请去[typeScript](https://typescript.devjs.cn/)

## 什么是typescript?
- TypeScript简称TS
- TS和JS之间的关系其实就是Less/Sass和CSS之间的关系
- 就像Less/Sass是对CSS进行扩展一样, TS也是对JS进行扩展
- 就像Less/Sass最终会转换成CSS一样, 我们编写好的TS代码最终也会换成JS
- TypeScript是JavaScript的超集，因为它扩展了JavaScript，有JavaScript没有的东西。


## 安装TypeScript

有两种主要的方式来获取TypeScript工具：

- 通过npm（Node.js包管理器）
- 安装Visual Studio的TypeScript插件

npm 
```ts
    // npm install -g typescript
```

### 构建你的第一个TypeScript文件
在编辑器，将下面的代码输入到greeter.ts文件里：
```ts
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```
## 泛型 <>
软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 
这样用户就可以以自己的数据类型来使用组件。

不用泛型的话，这个函数可能是下面这样:
```ts
function identity(arg: number): number {
    return arg;
}
```
因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 
这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。
```ts
function identity<T>(arg: T): T {
    return arg;
}
```
我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：

```ts
let output = identity<string>("myString");  // type of output will be 'string'
```

### 使用泛型变量
使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。

<h2>举个例子</h2>

如果我们想同时打印出arg的长度。 我们很可能会这样做：
```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
```
如果这么做，编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 
记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有.length属性的。

## 枚举(enum)

使用枚举我们可以定义一些有名字的数字常量。 枚举通过enum关键字来定义。

```ts
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```
一个枚举类型可以包含零个或多个枚举成员。 
枚举成员具有一个数字值，它可以是常数或是计算得出的值 当满足如下条件时，枚举成员被当作是常数：

- 不具有初始化函数并且之前的枚举成员是常数。 在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。 但第一个枚举元素是个例外。 如果它没有初始化方法，那么它的初始值为0。
- 枚举成员使用常数枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
  - 数字字面量
  - 引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的） 如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用。

所有其它情况的枚举成员被当作是需要计算得出的值。
```ts
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
```
枚举是在运行时真正存在的一个对象。 其中一个原因是因为这样可以从枚举值到枚举名进行反向映射。
```ts
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```
编译成：
```ts
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
```

## 其他
其他的与javaScript差距不大有兴趣的可以去看一下['学习javaScript'](./javaScript.md)
