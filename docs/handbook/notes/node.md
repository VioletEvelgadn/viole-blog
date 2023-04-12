![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07cfbc9237f64c00a930b74ba3c93027~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp)
# Nodejs学习笔记

## 一.什么是nodejs

nodejs 是一个基于v8引擎的运行时环境

### 1.使用node管理工具

node版本管理工具：n(不支持windows)，nvm-windows

- nvm list :  查看电脑上有哪些node 版本
- nvm install 14.13.1 安装指定版本
- nvm install lts 安装lts
- nvm list available
- nvm  use 版本号 ：切换到 对对应的版本进行使用
- nvm uninstall 版本号 : 卸载对应的版本

### 2.Node中的REPL
- REPL是Read-Eval-Print Loop的简称，翻译为："读取-求值-输出 循环"
- 是一个加简单的、交互式编程环境在node环境下执行代码

## 二.JS模块化和Node模块化
```js
// 清空控制台
console.clear()

// 打印函数的调用栈
console.trance()
```
### 1.commonJs
>node实现commonjs就是对象的引用赋值(浅层拷贝)

```js
// 导出
exports.name = name

// 引入
const { name } = require('./路径')
```
>导出的本质上是：Module.export导出，一旦是 Module.expor导出，expor导出将不起作用
Node内部帮我们做了一件事：Module.export = export
module.export 和export 以及require指向的都是同一块地址空间，但是当用module.export = {}进行对象的导出时，内存中会重新开辟一块内存进行导出，exports将失去效果。

### require的核心模块

#### 1.没有后缀名的文件的查找顺序：
1. 直接找文件X
2.   查找X.js
3.   查找X.json
4.   查找X.node

#### 2.没有找到对应的文件

查找目录下的index文件

1. 直接找文件X/index.js
2.   查找X/index.js
3.   查找X/index.json
4.   查找Xindex.node

node中的commonjs和加载过程同步
```js
require('./index.js')

console.log('main的代码被执行了') //先执行index.js 的文件再执行mian.js 中的代码
```

## 三、npm包管理
**Script:**

npm start和npm run start的区别是什么？

- 它们是等价的；
- 对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行；

**semver版本规范**

**semver版本规范是X.Y.Z：**

- X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）；
- Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）；
- Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）；

>我们这里解释一下 ^和~的区别：

>^x.y.z：表示x是保持不变的，y和z永远安装最新的版本；

>~x.y.z：表示x和y保持不变的，z永远安装最新的版本；

## 四、创建自己的脚手架工具

### 1.通过自定义命令xyl执行入口文件index.js

创建好相应的项目，里面有`·index.js`入口文件

```js
#!/usr/bin/env node
console.log('xyl cli')
```

执行`npm init -y `初始化一个`package.json`文件,在里面配置

```js
"bin": {
    "xyl": "index.js"
  },
// xyl为命令
// index.js 事要执行的文件
```
这步不能省，执行npm link 命令，将我们的命令进行一个链接

再在终端种输入`xyl`,执行独对应的index文件

**2. 通过自定义的命令xyl --version查看版本号**
在项目中先下载`commander`
>npm install commander

```js
#!/usr/bin/env node
const program = require('commander')
// 查看版本号，通过require请求道package.json对象拿到version
program.version(require('./package.json').version)


// 通过process进程的参数解析我们输入的命令
program.parse(process.args)
```
执行xyl --version命令即显示版本号，xyl -- help命令默认

**3.其他选项**
```js
// 增加自己的options
program.option('-x --xyl','a xyl cli')
program.option('-d --dest <dest>','a destination floder,例如：-d/src/components')
// 监听
program.on('--help', ()=> {
  console.log("Other: ")
  console.log("   other options~")
})
```

**4.使用create 命令创建项目**

新建`create.js`
```js
const program = require('commander')

const  creatCommand =() => {

  program
    .command('create <project> [others...]') //命令
    .description('clone repository into a floder') //描述
    .action((project, others) => { //动作
      console.log(project, others)
    })

}
module.exports = creatCommand
```
在`index.js` 中调用
```js
const program = require('commander')
// 创建其他指令
creatCommand()
```
**5.开发自己的脚手架工具(项目文件夹06 learnCli)**
```js
// 将回调函数转换成promise
const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { vurRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const createProjetActions = async (project) => {
  // 等待时间太长，打印点信息
  console.log('xyl helps you creat project')
  // 1.clone 项目
  await download(vurRepo, project, { clone: true })
  // 2.执行npm install 
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // 3.运行 npm run serve
  // 防止阻塞第4步操作打开浏览器8080占用阻塞
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
  // 4.打开浏览器
    // 4.1 npm install open
  open('http://localhost:8080/')

}

module.exports = {
  createProjetActions
}
```
**后面因为有点难理解没学了·······**

## 五、koa框架
### 1.koa初体验
安装koa
> npm init -y
> npm install koa
 ```js
const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
console.log('中间件被执行')
// 返回结果
ctx.response.body = "我是返回的结果"
})

app.listen(8000, () => {
console.log('koa服务器启动成功')
})
```
_注意：_

- koa中间件只能通过use注册，没有提供app.use('/login', ())这种方式
- 没有app.get,app.post等方法
- 也没有提供连续注册中间件的方式

### 2.koa中路由的使用
安装第三方库
> npm install koa-router

`routers/user.js`

```js
const Router = require('koa-router')

const router = new Router({prefix: '/users'})

router.get('/', (ctx, next) => {
  ctx.response.body = 'get request'
})
router.put('/', (ctx, next) => {
  ctx.response.body = 'put request'
})

module.exports = router
```
```js
const Koa = require('koa')
const userRouter = require('./routers/user')
const app = new Koa()

app.use((ctx, next) => {
 next()
})
app.use(userRouter.routes())
// 当没有实现的方法会提示该方法未实现
app.use(userRouter.allowedMethods())
app.listen(8000, () => {
  console.log('服务器启动成功')
})

```

### 3.koa中的params和query参数解析
koa中的params和query区别：
- 后端方法：`app.get("/deleteUser/:id", function(req, res) {...});`

- 请求URL：`http://localhost:8080/deleteUser/2?user=张三&passwd=zhangsan`
- 页面结果：
```js
req.params: {
"id": "2"
}
req.query: {
"user": "张三",
"passwd": "zhangsan"
}
```
`req.params`为查询参数对。而`req.query`是对应于后端代码中`:名称`的部分。
```js
const Koa = require('koa')
const Router = require('koa-router')
const userRouter = new Router({prefix: '/users'})

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params)
  console.log(ctx.request.query)
})
const app = new Koa()

app.use(userRouter.routes())
app.listen(8000, () => {
  console.log('服务器启动成功')
})

/*
*结果：
{ id: 'abc' }
[Object: null prototype] { name: 'xyl', age: '18' }
*/
```
输入请求`localhost:8000/users/abc?name=xyl&age=18`

### 4.koa中的json和urlencoded解析

koa中的json和urlencoded解析
>npm install koa-bodyparser

进行post请求中的data的json传值
```js
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser()) // 使用第三方库进行解析
app.use((ctx, next) => {
  console.log(ctx.request.body)
})

app.listen(8000, () => {
  console.log('服务器启动成功')
})
```

### 5.koa中的form-data解析
安装第三方库
> npm install koa-multer

一般进行文件的上传

```js
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')
// const Router = require('koa-router')
const app = new Koa()

// const loginRouter = new Router({prefix: '/login'})
const upload = multer()

app.use(bodyParser())
app.use(upload.any())
app.use((ctx, next) => {
  console.log(ctx.req.body)
  ctx.response.body = 'hello'
})
// loginRouter.post('/',upload.any(), (ctx, next) => {
//   console.log(ctx.req.body)
//   console.log(ctx.request.body)
// })
// app.use(loginRouter.routes())

app.listen(8000, () => {
  console.log('服务器启动成功')
})
```

两种方式，注释掉的是另一种方式

### 6.文件上传

```js
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const uploadRouter = new Router({prefix: '/upload'})

// 服务器跑起来自动生成目的文件夹
const upload = multer({
  dest: './uploads/'
})

uploadRouter.post('/avatar', (ctx, next) => {
  console.log(ctx.req.file)
  ctx.response.body = '上传头像成功'
})

app.use(uploadRouter.routes())

app.listen(8000, () => {
  console.log('服务器启动成功')
})
```

### 7.响应数据
```js
app.use((ctx, next) => {
  // ctx.response.body = {
  // }
  // 设置状态码
  ctx.status = 200
  // 设置内容
  ctx.response.body = []
})
```

### 8.静态服务器
> npm install koa-static

```js
const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()
app.use(koaStatic('/home'))

app.listen(8000, () => {
  console.log('服务器启动成功')
})
```

## 六、koa和express的区别

- express是完整和强大的，其中帮助我们内置了非常多好用的功能；
- koa是简洁和自由的，它只包含最核心的功能，并不会对我们使用其他中间件进行任何的限制。 甚至是在app中连最基本的get、post都没有给我们提供； 我们需要通过自己或者路由来判断请求方式或者其他功能；
  **next() 函数**
- express 返回的不是promise
- koa返回的是promise

**洋葱模型**

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/476099ed7b4f4d778898255d40e7e4cb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 七、允许跨域

以nodejs的koa框架为例子
```js
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
})
```

**前端也可以配置跨域**

```javascript
// 配置基本都是写死的
module.exports = {
  // 修改的配置 配置proxy 服务器代理
  devServer: {
    proxy: {
      // 如果请求的地址是以 /api 开头就会请求到'http://121.4.103.100',
      '/api': {
        target: 'http://121.4.103.100',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //请求的时候api会被替换成''
        }
      }
    }
  }
}
```

直接使用/api/xxx/xxx的uri调用接口即可代理会将/api进行替换/src/main.js`

```js
import axios from 'axios';
import VueAxios from 'vue-axios'

// 接口代理时配置的URL，即需要替换的/api
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

Vue.use(VueAxios, axios);
```

