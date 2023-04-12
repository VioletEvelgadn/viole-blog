# React 学习 
![img](/publice/img_6.png)
原文地址[React](https://juejin.cn/post/6844903491098378247)
# 开始学习
![img](/publice/img_7.png)

## 1 React 全部都是组件化的
React 是围绕可重用组件的概念设计的。你定义小组件并将它们组合在一起形成更大的组件。

无论大小，所有组件都是可重用的，甚至在不同的项目中也是如此。

React 组件最简单的形式，就是一个普通的 JavaScript 函数：

```react
    function Button (props) {
  // 这里返回一个 DOM 元素，例如：
  return <button type="submit">{props.label}</button>;
}
// 将按钮组件呈现给浏览器
ReactDOM.render(<Button label="Save" />, mountNode)
```
例 1：编辑上面的代码并按 Ctrl+Enter 键执行（译者注：译文暂时没有这个功能，请访问原文使用此功能，下同）

- 括号中的 button 标签将稍后解释。现在不要担心它们。ReactDOM 也将稍后解释，但如果你想测试
- 这个例子和所有接下来的例子，上述 render 函数是必须的。（React 将要接管和控制的是
- ReactDOM.render 的第 2 个参数即目标 DOM 元素）。在 jsComplete REPL 中，你可以使用特殊的
- 变量 mountNode。

例 1 的注意事项：

- 组件名称首字母大写，Button。必须要这样做是因为我们将处理 HTML 元素和 React 元素的混合。小写名称是为 HTML 元素保留的。事实上，将 React 组件命名为 “button” 然后你就会发现 ReactDOM 会忽略这个函数，仅仅是将其作为一个普通的空 HTML 按钮来渲染。
- 每个组件都接收一个属性列表，就像 HTML 元素一样。在 React 中，这个列表被称为属性。虽然你可以将一个函数随意命名。
- 在上面 Button 函数组件的返回输出中，我们奇怪地写了段看上去像 HTML 的代码。这实际上既不是 JavaScript 也不是 HTML，老实说，这甚至不是 React.js。然而它非常流行，以至于成为 React 应用程序中的默认值。这就是所谓的 JSX，这是一个JavaScript 的扩展。JSX 也是一个折中方案！继续尝试并在上面的函数中返回其他 HTML 元素，看看它们是如何被支持的（例如，返回一个文本输入元素）。

## 2 JSX 输出的是什么？

上面的例 1 可以用没有 JSX 的纯 React.js 编写，如下:
```react
function Button (props) {
  return React.createElement(
    "button",
    { type: "submit" },
    props.label
  );
}

// 要使用 Button，你可以这么做
ReactDOM.render(
  React.createElement(Button, { label: "Save" }),
  mountNode
);
```

