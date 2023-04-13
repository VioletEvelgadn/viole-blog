import{_ as s,c as a,o as n,N as l}from"./chunks/framework.75eb0240.js";const p="/viole-blog/assets/img_3.25e05982.png",u=JSON.parse('{"title":"typeScript","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/notes/TypeScript.md"}'),o={name:"handbook/notes/TypeScript.md"},t=l('<h1 id="typescript" tabindex="-1">typeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;typeScript&quot;">​</a></h1><p><img src="'+p+`" alt="img"></p><p>本文章是根据TypeScript 中文手册来编写的，详情请去<a href="https://typescript.devjs.cn/" target="_blank" rel="noreferrer">typeScript</a></p><h2 id="什么是typescript" tabindex="-1">什么是typescript? <a class="header-anchor" href="#什么是typescript" aria-label="Permalink to &quot;什么是typescript?&quot;">​</a></h2><ul><li>TypeScript简称TS</li><li>TS和JS之间的关系其实就是Less/Sass和CSS之间的关系</li><li>就像Less/Sass是对CSS进行扩展一样, TS也是对JS进行扩展</li><li>就像Less/Sass最终会转换成CSS一样, 我们编写好的TS代码最终也会换成JS</li><li>TypeScript是JavaScript的超集，因为它扩展了JavaScript，有JavaScript没有的东西。</li></ul><h2 id="安装typescript" tabindex="-1">安装TypeScript <a class="header-anchor" href="#安装typescript" aria-label="Permalink to &quot;安装TypeScript&quot;">​</a></h2><p>有两种主要的方式来获取TypeScript工具：</p><ul><li>通过npm（Node.js包管理器）</li><li>安装Visual Studio的TypeScript插件</li></ul><p>npm</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// npm install -g typescript</span></span></code></pre></div><h3 id="构建你的第一个typescript文件" tabindex="-1">构建你的第一个TypeScript文件 <a class="header-anchor" href="#构建你的第一个typescript文件" aria-label="Permalink to &quot;构建你的第一个TypeScript文件&quot;">​</a></h3><p>在编辑器，将下面的代码输入到greeter.ts文件里：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">person</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Jane User</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(user)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="泛型" tabindex="-1">泛型 &lt;&gt; <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型 &lt;&gt;&quot;">​</a></h2><p>软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。</p><p>在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。</p><p>不用泛型的话，这个函数可能是下面这样:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">identity</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">identity</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。</p><p>我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。</p><p>我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> output </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">identity</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myString</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// type of output will be &#39;string&#39;</span></span></code></pre></div><h3 id="使用泛型变量" tabindex="-1">使用泛型变量 <a class="header-anchor" href="#使用泛型变量" aria-label="Permalink to &quot;使用泛型变量&quot;">​</a></h3><p>使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。</p><h2>举个例子</h2><p>如果我们想同时打印出arg的长度。 我们很可能会这样做：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loggingIdentity</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// Error: T doesn&#39;t have .length</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>如果这么做，编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有.length属性的。</p><h2 id="枚举-enum" tabindex="-1">枚举(enum) <a class="header-anchor" href="#枚举-enum" aria-label="Permalink to &quot;枚举(enum)&quot;">​</a></h2><p>使用枚举我们可以定义一些有名字的数字常量。 枚举通过enum关键字来定义。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Direction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Up </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Down</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Left</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Right</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>一个枚举类型可以包含零个或多个枚举成员。 枚举成员具有一个数字值，它可以是常数或是计算得出的值 当满足如下条件时，枚举成员被当作是常数：</p><ul><li>不具有初始化函数并且之前的枚举成员是常数。 在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。 但第一个枚举元素是个例外。 如果它没有初始化方法，那么它的初始值为0。</li><li>枚举成员使用常数枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常数枚举表达式： <ul><li>数字字面量</li><li>引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的） 如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用。</li></ul></li></ul><p>所有其它情况的枚举成员被当作是需要计算得出的值。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FileAccess</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// constant members</span></span>
<span class="line"><span style="color:#A6ACCD;">    None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Read    </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Write   </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ReadWrite  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Read </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> Write</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// computed member</span></span>
<span class="line"><span style="color:#A6ACCD;">    G </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>枚举是在运行时真正存在的一个对象。 其中一个原因是因为这样可以从枚举值到枚举名进行反向映射。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Enum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    A</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Enum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> nameOfA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Enum[a]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;A&quot;</span></span></code></pre></div><p>编译成：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> Enum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">Enum</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">Enum</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">Enum</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(Enum </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (Enum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Enum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> nameOfA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Enum[a]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;A&quot;</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>其他的与javaScript差距不大有兴趣的可以去看一下<a href="./javaScript.html">&#39;学习javaScript&#39;</a></p>`,43),e=[t];function c(r,y,D,i,F,C){return n(),a("div",null,e)}const d=s(o,[["render",c]]);export{u as __pageData,d as default};