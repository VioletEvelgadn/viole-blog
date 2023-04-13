import{_ as s,c as a,o as n,N as e}from"./chunks/framework.75eb0240.js";const p="/viole-blog/assets/img_4.46a9c864.png",l="/viole-blog/assets/img_5.0e71cb0f.png",m=JSON.parse('{"title":"vue学习","description":"","frontmatter":{},"headers":[],"relativePath":"handbook/notes/vue.md"}'),t={name:"handbook/notes/vue.md"},o=e('<h1 id="vue学习" tabindex="-1">vue学习 <a class="header-anchor" href="#vue学习" aria-label="Permalink to &quot;vue学习&quot;">​</a></h1><p><img src="'+p+'" alt="img"> 原文链接 <a href="https://juejin.cn/post/6844903470219149326" target="_blank" rel="noreferrer">vue</a><img src="'+l+`" alt="img"></p><h2 id="vuex是什么" tabindex="-1">Vuex是什么？ <a class="header-anchor" href="#vuex是什么" aria-label="Permalink to &quot;Vuex是什么？&quot;">​</a></h2><p>Vuex 类似 Redux 的<h4>状态管理器</h4>，用来管理Vue的所有组件状态。</p><h2 id="为什么使用vuex" tabindex="-1">为什么使用Vuex？ <a class="header-anchor" href="#为什么使用vuex" aria-label="Permalink to &quot;为什么使用Vuex？&quot;">​</a></h2><p>当你打算开发大型单页应用（SPA），会出现多个视图组件依赖同一个状态，来自不同视图的行为需要变更同一个状态。</p><p>遇到以上情况时候，你就应该考虑使用Vuex了，它能把组件的共享状态抽取出来，当做一个全局单例模式进行管理。 这样不管你在何处改变状态，都会通知使用该状态的组件做出相应修改。</p><p>下面讲解如何使用Vuex。</p><h2 id="最简单的vuex示例" tabindex="-1">最简单的Vuex示例 <a class="header-anchor" href="#最简单的vuex示例" aria-label="Permalink to &quot;最简单的Vuex示例&quot;">​</a></h2><p>本文就不涉及如何安装Vuex，直接通过代码讲解。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vuex form &#39;vuex&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(Vuex);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const store = new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">    state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        count: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        increment (state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            state.count++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>以上就是一个最简单的Vuex，每一个Vuex应用就是一个store， 在store中包含组件中的共享状态state和改变状态的方法（暂且称作方法）mutations。</p><p>需要注意的是只能通过mutations改变store的state的状态， 不能通过store.state.count = 5;直接更改，state相当于对外的只读属性。</p><p>使用store.commit方法触发mutations改变state:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">store.commit(&#39;increment&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console.log(store.state.count)  // 1</span></span></code></pre></div><p>一个简简单单的Vuex应用就实现了。</p><h2 id="在vue组件使用vuex" tabindex="-1">在Vue组件使用Vuex <a class="header-anchor" href="#在vue组件使用vuex" aria-label="Permalink to &quot;在Vue组件使用Vuex&quot;">​</a></h2><p>如果希望Vuex状态更新，相应的Vue组件也得到更新，最简单的方法就是在Vue的computed（计算属性）获取state</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Counter 组件</span></span>
<span class="line"><span style="color:#A6ACCD;">const Counter = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    template: \`</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ count }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        count () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return store.state.count;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>上面的例子是直接操作全局状态store.state.count，那么每个使用该Vuex的组件都要引入。 为了解决这个，Vuex通过store选项，提供了一种机制将状态从根组件注入到每一个子组件中。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 根组件</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vuex form &#39;vuex&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(Vuex);</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    store,</span></span>
<span class="line"><span style="color:#A6ACCD;">    components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Counter</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    template: \`</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;counter&gt;&lt;/counter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>通过这种注入机制，就能在子组件Counter通过this.$store访问：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Counter 组件</span></span>
<span class="line"><span style="color:#A6ACCD;">const Counter = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    template: \`</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ count }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        count () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.$store.state.count</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="mapstate函数" tabindex="-1">mapState函数 <a class="header-anchor" href="#mapstate函数" aria-label="Permalink to &quot;mapState函数&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.$store.state.count</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这样通过count计算属性获取同名state.count属性，是不是显得太重复了，我们可以使用mapState函数简化这个过程。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { mapState } from &#39;vuex&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: mapState ({</span></span>
<span class="line"><span style="color:#A6ACCD;">        count: state =&gt; state.count,</span></span>
<span class="line"><span style="color:#A6ACCD;">        countAlias: &#39;count&#39;,    // 别名 \`count\` 等价于 state =&gt; state.count</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>还有更简单的使用方法：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">computed: mapState([</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 映射 this.count 为 store.state.count</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;count&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span></code></pre></div><h2 id="getters对象" tabindex="-1">Getters对象 <a class="header-anchor" href="#getters对象" aria-label="Permalink to &quot;Getters对象&quot;">​</a></h2><p>如果我们需要对state对象进行做处理计算，如下：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    doneTodosCount () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.$store.state.todos.filter(todo =&gt; todo.done).length</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>如果多个组件都要进行这样的处理，那么就要在多个组件中复制该函数。 这样是很没有效率的事情，当这个处理过程更改了， 还有在多个组件中进行同样的更改，这就更加不易于维护。</p><p>Vuex中getters对象，可以方便我们在store中做集中的处理。Getters接受state作为第一个参数：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const store = new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    todos: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 1, text: &#39;...&#39;, done: true },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 2, text: &#39;...&#39;, done: false }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    doneTodos: state =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.todos.filter(todo =&gt; todo.done)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>在Vue中通过store.getters对象调用。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodos () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.$store.getters.doneTodos</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Getter也可以接受其他getters作为第二个参数：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodos: state =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.todos.filter(todo =&gt; todo.done)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  doneTodosCount: (state, getters) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return getters.doneTodos.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="mapgetters辅助函数" tabindex="-1">mapGetters辅助函数 <a class="header-anchor" href="#mapgetters辅助函数" aria-label="Permalink to &quot;mapGetters辅助函数&quot;">​</a></h2><p>与mapState类似，都能达到简化代码的效果。mapGetters辅助函数仅仅是将store中的getters映射到局部计算属性：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { mapGetters } from &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用对象展开运算符将 getters 混入 computed 对象中</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters([</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;doneTodosCount&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;anotherGetter&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>上面也可以写作：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">computed: mapGetters([</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;doneTodosCount&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;anotherGetter&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span></code></pre></div><p>所以在Vue的computed计算属性中会存在两种辅助函数：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { mapState, mapGetters } form &#39;vuex&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        mapState({ ... }),</span></span>
<span class="line"><span style="color:#A6ACCD;">        mapGetter({ ... })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,46),c=[o];function r(i,C,A,u,y,d){return n(),a("div",null,c)}const h=s(t,[["render",r]]);export{m as __pageData,h as default};
