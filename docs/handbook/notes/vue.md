# vue学习
![img](/publice/img_4.png)
原文链接 [vue](https://juejin.cn/post/6844903470219149326)
![img](/publice/img_5.png)

## Vuex是什么？

Vuex 类似 Redux 的<h4>状态管理器</h4>，用来管理Vue的所有组件状态。

## 为什么使用Vuex？

当你打算开发大型单页应用（SPA），会出现多个视图组件依赖同一个状态，来自不同视图的行为需要变更同一个状态。

遇到以上情况时候，你就应该考虑使用Vuex了，它能把组件的共享状态抽取出来，当做一个全局单例模式进行管理。
这样不管你在何处改变状态，都会通知使用该状态的组件做出相应修改。

下面讲解如何使用Vuex。

## 最简单的Vuex示例

本文就不涉及如何安装Vuex，直接通过代码讲解。
```vue
import Vue from 'vue';
import Vuex form 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
```
以上就是一个最简单的Vuex，每一个Vuex应用就是一个store，
在store中包含组件中的共享状态state和改变状态的方法（暂且称作方法）mutations。

需要注意的是只能通过mutations改变store的state的状态，
不能通过store.state.count = 5;直接更改，state相当于对外的只读属性。

使用store.commit方法触发mutations改变state:

```vue
store.commit('increment');

console.log(store.state.count)  // 1
```
一个简简单单的Vuex应用就实现了。

## 在Vue组件使用Vuex

如果希望Vuex状态更新，相应的Vue组件也得到更新，最简单的方法就是在Vue的computed（计算属性）获取state

```vue
// Counter 组件
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return store.state.count;
        }
    }
}
```
上面的例子是直接操作全局状态store.state.count，那么每个使用该Vuex的组件都要引入。
为了解决这个，Vuex通过store选项，提供了一种机制将状态从根组件注入到每一个子组件中。
```vue
// 根组件
import Vue from 'vue';
import Vuex form 'vuex';

Vue.use(Vuex);
const app = new Vue({
    el: '#app',
    store,
    components: {
        Counter
    },
    template: `
        <div class="app">
            <counter></counter>
        </div>
    `
})
```

通过这种注入机制，就能在子组件Counter通过this.$store访问：
```vue
// Counter 组件
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return this.$store.state.count
        }
    }
}
```
## mapState函数
```vue
computed: {
    count () {
        return this.$store.state.count
    }
}
```
这样通过count计算属性获取同名state.count属性，是不是显得太重复了，我们可以使用mapState函数简化这个过程。
```vue
import { mapState } from 'vuex';

export default {
    computed: mapState ({
        count: state => state.count,
        countAlias: 'count',    // 别名 `count` 等价于 state => state.count
    })
}
```
还有更简单的使用方法：
```vue
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])
```

## Getters对象
如果我们需要对state对象进行做处理计算，如下：
```vue
computed: {
    doneTodosCount () {
        return this.$store.state.todos.filter(todo => todo.done).length
    }
}
```
如果多个组件都要进行这样的处理，那么就要在多个组件中复制该函数。
这样是很没有效率的事情，当这个处理过程更改了， 还有在多个组件中进行同样的更改，这就更加不易于维护。

Vuex中getters对象，可以方便我们在store中做集中的处理。Getters接受state作为第一个参数：
```vue
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```
在Vue中通过store.getters对象调用。
```vue
computed: {
  doneTodos () {
    return this.$store.getters.doneTodos
  }
}
```
Getter也可以接受其他getters作为第二个参数：
```vue
getters: {
  doneTodos: state => {
      return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```
## mapGetters辅助函数
与mapState类似，都能达到简化代码的效果。mapGetters辅助函数仅仅是将store中的getters映射到局部计算属性：
```vue
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```
上面也可以写作：
```vue
computed: mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
```
所以在Vue的computed计算属性中会存在两种辅助函数：
```vue
import { mapState, mapGetters } form 'vuex';

export default {
    // ...
    computed: {
        mapState({ ... }),
        mapGetter({ ... })
    }
}
```


