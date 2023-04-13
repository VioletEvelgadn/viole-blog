import{_ as s,c as a,o as n,N as l}from"./chunks/framework.75eb0240.js";const p="/viole-blog/assets/img_6.6d854376.png",o="/viole-blog/assets/img_7.5ba9d219.png",d=JSON.parse('{"title":"React 学习","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/notes/react.md"}'),t={name:"handbook/notes/react.md"},e=l('<h1 id="react-学习" tabindex="-1">React 学习 <a class="header-anchor" href="#react-学习" aria-label="Permalink to &quot;React 学习&quot;">​</a></h1><p><img src="'+p+'" alt="img"> 原文地址<a href="https://juejin.cn/post/6844903491098378247" target="_blank" rel="noreferrer">React</a></p><h1 id="开始学习" tabindex="-1">开始学习 <a class="header-anchor" href="#开始学习" aria-label="Permalink to &quot;开始学习&quot;">​</a></h1><p><img src="'+o+`" alt="img"></p><h2 id="_1-react-全部都是组件化的" tabindex="-1">1 React 全部都是组件化的 <a class="header-anchor" href="#_1-react-全部都是组件化的" aria-label="Permalink to &quot;1 React 全部都是组件化的&quot;">​</a></h2><p>React 是围绕可重用组件的概念设计的。你定义小组件并将它们组合在一起形成更大的组件。</p><p>无论大小，所有组件都是可重用的，甚至在不同的项目中也是如此。</p><p>React 组件最简单的形式，就是一个普通的 JavaScript 函数：</p><div class="language-react"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Button (props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 这里返回一个 DOM 元素，例如：</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &lt;button type=&quot;submit&quot;&gt;{props.label}&lt;/button&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 将按钮组件呈现给浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM.render(&lt;Button label=&quot;Save&quot; /&gt;, mountNode)</span></span></code></pre></div><p>例 1：编辑上面的代码并按 Ctrl+Enter 键执行（译者注：译文暂时没有这个功能，请访问原文使用此功能，下同）</p><ul><li>括号中的 button 标签将稍后解释。现在不要担心它们。ReactDOM 也将稍后解释，但如果你想测试</li><li>这个例子和所有接下来的例子，上述 render 函数是必须的。（React 将要接管和控制的是</li><li>ReactDOM.render 的第 2 个参数即目标 DOM 元素）。在 jsComplete REPL 中，你可以使用特殊的</li><li>变量 mountNode。</li></ul><p>例 1 的注意事项：</p><ul><li>组件名称首字母大写，Button。必须要这样做是因为我们将处理 HTML 元素和 React 元素的混合。小写名称是为 HTML 元素保留的。事实上，将 React 组件命名为 “button” 然后你就会发现 ReactDOM 会忽略这个函数，仅仅是将其作为一个普通的空 HTML 按钮来渲染。</li><li>每个组件都接收一个属性列表，就像 HTML 元素一样。在 React 中，这个列表被称为属性。虽然你可以将一个函数随意命名。</li><li>在上面 Button 函数组件的返回输出中，我们奇怪地写了段看上去像 HTML 的代码。这实际上既不是 JavaScript 也不是 HTML，老实说，这甚至不是 React.js。然而它非常流行，以至于成为 React 应用程序中的默认值。这就是所谓的 JSX，这是一个JavaScript 的扩展。JSX 也是一个折中方案！继续尝试并在上面的函数中返回其他 HTML 元素，看看它们是如何被支持的（例如，返回一个文本输入元素）。</li></ul><h2 id="_2-jsx-输出的是什么" tabindex="-1">2 JSX 输出的是什么？ <a class="header-anchor" href="#_2-jsx-输出的是什么" aria-label="Permalink to &quot;2 JSX 输出的是什么？&quot;">​</a></h2><p>上面的例 1 可以用没有 JSX 的纯 React.js 编写，如下:</p><div class="language-react"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Button (props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return React.createElement(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;button&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    { type: &quot;submit&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.label</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 要使用 Button，你可以这么做</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  React.createElement(Button, { label: &quot;Save&quot; }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mountNode</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>例 2：不使用 JSX 编写 React 组件</p><p>在 React 顶级 API 中，createElement 函数是主函数。 这是你需要学习的 7 个 API 中的 1 个。React 的 API 就是这么小。</p><p>就像 DOM 自身有一个 document.createElement 函数来创建一个由标签名指定的元素一样， React 的 createElement 函数是一个高级函数，有和 document.createElement 同样的功能， 但它也可以用于创建一个表示 React 组件的元素。当我们使用上面例 2 中的按钮组件时，我们使用的是后者。</p><p>不像 document.createElement，React 的 createElement 在接收第二个参数后，接收一个动态参数， 它表示所创建元素的子元素。所以 createElement 实际上创建了一个树。</p><p>这里就是这样的一个例子:</p><div class="language-react"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const InputForm = React.createElement(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;form&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  { target: &quot;_blank&quot;, action: &quot;https://google.com/search&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  React.createElement(&quot;div&quot;, null, &quot;Enter input and click Search&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  React.createElement(&quot;input&quot;, { className: &quot;big-input&quot; }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  React.createElement(Button, { label: &quot;Search&quot; })</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// InputForm 使用 Button 组件，所以我们需要这样做：</span></span>
<span class="line"><span style="color:#A6ACCD;">function Button (props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return React.createElement(</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;button&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    { type: &quot;submit&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.label</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 然后我们可以通过 .render 方法直接使用 InputForm</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM.render(InputForm, mountNode);</span></span></code></pre></div><h2 id="_3-你可以在-javascript-的任何地方使用-jsx" tabindex="-1">3 你可以在 JavaScript 的任何地方使用 JSX <a class="header-anchor" href="#_3-你可以在-javascript-的任何地方使用-jsx" aria-label="Permalink to &quot;3 你可以在 JavaScript 的任何地方使用 JSX&quot;">​</a></h2><p>在 JSX 中，你可以在一对花括号内使用任何 JavaScript 表达式。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> RandomValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用：</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RandomValue</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> mountNode)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>在 JSX 中使用 JavaScript 表达式</p><p>任何 JavaScript 表达式可以直接放在花括号中。这相当于在 JavaScript 中插入 \${} 模板</p><p>这是 JSX 内唯一的约束：只有表达式。例如，你不能使用 if 语句，但三元表达式是可以的</p><p>JavaScript 变量也是表达式，所以当组件接受属性列表时（不包括 RandomValue 组件，props 是可选择的），你可以在花括号里使用这些属性。我们在上述（例 1）的 Button 组件是这样使用的。</p><p>JavaScript 对象也是表达式。有些时候我们在花括号中使用 JavaScript 对象，这看起来像是使用了两个花括号，但是在花括号中确实只有一个对象。其中一个用例就是将 CSS 样式对象传递给响应中的特殊样式属性：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ErrorDisplay </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">backgroundColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yellow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ErrorDisplay</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">These aren&#39;t the droids you&#39;re looking for</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  mountNode</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_4-你可以使用-javascript-类写-react-组件" tabindex="-1">4 你可以使用 JavaScript 类写 React 组件 <a class="header-anchor" href="#_4-你可以使用-javascript-类写-react-组件" aria-label="Permalink to &quot;4 你可以使用 JavaScript 类写 React 组件&quot;">​</a></h2><p>简单的函数组件非常适合简单的需求，但是有的时候我们需要的更多。React 也支持通过使用 JavaScript 类来创建组件。这里 Button 组件（在例 1 中）就是使用类的语法编写的。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用（相同的语法）</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Save</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> mountNode)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>使用 JavaScript 类创建组件</p><p>类的语法是非常简单的：定义一个扩展的 React.Component 类（另一个你需要学习的 React 的顶级 API）。 该类定义了一个单一的实例函数 —— render()，并使函数返回虚拟 DOM 对象。 每一次我们使用基于类的 Button 组件（例如，通过 &lt;Button ... /&gt;）, React 将从这个基于类的组件中实例化对象，并在 DOM 树中使用该对象。</p><p>这就是为什么上面的例子中我们可以在 JSX 中使用 this.props.label 渲染输出的原因，因为每一个组件都有一个特殊的称为 props 的 实例 属性，这让所有的值传递给该组件时被实例化</p><p>由于我们有一个与组件的单个使用相关联的实例，所以我们可以按照自己的意愿定制该实例。 例如，我们可以通过使用常规 JavaScript 构造函数来构造它：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}&gt;{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Save</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> mountNode)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_5-react-中的事件-两个重要的区别" tabindex="-1">5 React 中的事件：两个重要的区别 <a class="header-anchor" href="#_5-react-中的事件-两个重要的区别" aria-label="Permalink to &quot;5 React 中的事件：两个重要的区别&quot;">​</a></h2><p>当处理 React 元素中的事件时，我们与 DOM API 的处理方式有两个非常重要的区别：</p><ul><li>所有 React 元素属性（包括事件）都使用 camelCase 命名，而不是 lowercase。例如是 onClick 而不是 onclick。</li><li>我们将实际的 JavaScript 函数引用传递给事件处理程序，而不是字符串。例如是 onClick={handleClick} 而不是 onClick=&quot;handleClick&quot;。</li></ul><p>React 用自己的对象包装 DOM 对象事件以优化事件处理的性能，但是在事件处理程序内部， 我们仍然可以访问 DOM 对象上所有可以访问的方法。React 将经过包装的事件对象传递给每个调用函数。 例如，为了防止表单提交默认提交操作，你可以这样做</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleSubmit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">preventDefault()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">log(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Form submitted</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onSubmit</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleSubmit</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Submit</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> mountNode)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_6-每一个-react-组件都有一个故事-第-1-部分" tabindex="-1">6 每一个 React 组件都有一个故事：第 1 部分 <a class="header-anchor" href="#_6-每一个-react-组件都有一个故事-第-1-部分" aria-label="Permalink to &quot;6 每一个 React 组件都有一个故事：第 1 部分&quot;">​</a></h2><ol><li>首先，我们定义了一个模板来创建组件中的元素。</li><li>然后，我们在某处使用 React。例如，在 render 内部调用其他的组件，或者直接使用 ReactDOM.render。</li><li>然后，React 实例化一个对象然后给它设置 props 然后我们可以通过 this.props 访问。这些属性都是我们在第 2 步传入的。</li><li>因为这些全部都是 JavaScript，constructor 方法将会被调用（如果定义的话）。这是我们称之为的第一个：组件生命周期方法。</li><li>接下来 React 计算渲染之后的输出方法（虚拟 DOM 节点）。</li><li>因为这是 React 第一次渲染元素，React 将会与浏览器连通（代表我们使用 DOM API）来显示元素。这整个过程称为 mounting。</li><li>接下来 React 调用另一个生命周期函数，称为 componentDidMount。我们可以这样使用这个方法，例如：在 DOM 上做一些我们现在知道的在浏览器中存在的东西。在此生命周期方法之前，我们使用的 DOM 都是虚拟的。</li><li>一些组件的故事到此结束，其他组件得到卸载浏览器 DOM 中的各种原因。在后一种情况发生时，会调用另一个生命周期的方法，componentWillUnmount。</li><li>任何 mounted 的元素的状态都可能会改变。该元素的父级可能会重新渲染。无论哪种情况，mounted 的元素都可能接收到不同的属性集。React 的魔力就是这儿，我们实际上需要的正是 React 的这一点！在这一点之前，说实话，我们并不需要 React。</li><li>组价的故事还在继续，但是在此之前，我们需要理解我所说的这种状态。</li></ol><h2 id="_7-react-组件可以具有私有状态" tabindex="-1">7 React 组件可以具有私有状态 <a class="header-anchor" href="#_7-react-组件可以具有私有状态" aria-label="Permalink to &quot;7 React 组件可以具有私有状态&quot;">​</a></h2><p>以下只适用于类组件。我有没有提到有人叫表象而已的部件 dumb？</p><p>状态类是任何 React 类组件中的一个特殊字段。React 检测每一个组件状态的变化，但是为了 React 更加有效，我们必须通过 React 的另一个 API 改变状态字段， 这就是我们要学习的另一个 API —— this.setState：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CounterButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">clickCounter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">currentTimestamp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleClick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#F07178;">setState(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">prevState</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> clickCounter</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prevState</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clickCounter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#82AAFF;">setInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> currentTimestamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Click</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Clicked: </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clickCounter</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Time: </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currentTimestamp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLocaleString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CounterButton</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> mountNode)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,50),c=[e];function r(D,y,F,C,i,A){return n(),a("div",null,c)}const m=s(t,[["render",r]]);export{d as __pageData,m as default};
