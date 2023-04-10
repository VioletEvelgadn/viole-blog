# 1.前言
<br/>
<h5>
说起css3相信大家都并不陌生。css作为html最高贵的化妆品，使用起来并不难可以说是有手就行，但要用好它确非常困难，写这篇文章之前我浏览过大量有关css新特性的文章，
这篇文章主要是带大家了解css3的一些新特性，以及基础的用法，体会css3的魅力！当然如果想要更好的使用这盒化妆品
还是需要努力学习，去寻找一些讲的更深入的文章与书籍，切记本文章所讲的只是基础。
</h5>

## 2 过度
过度，是我们在项目中用的最多的一个特性，使用它主要是为了实现一些交互效果，让页面变得生动一些显得不那么死气沉沉

### 2.1 语法
``` css
    transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
```
举个例子
```css
    /*假设我们想在鼠标移入时将item这个方块向右移动100px的位置移动时间为一秒*/
        .item{
            width: 100px;
            height: 100px;
            background-color: red;
            transform: all, 1s;
        }
        .item:hover{
            margin-left: 40px;
        }

```
## 3 动画
动画与过度相似都是为了实现一些交互效果，让页面变得生动一些显得不那么死气沉沉

### 3.1 推荐
在举例子之前我先向大家推荐几个我认为比较好用的css动画库

[1.Animista](https://animista.net/)

Animista是一个在线动画生成器，同时也是一个动画库

[2. Animate CSS](https://animate.style/)

想必这个不用介绍，大部分人都知道了。Animate CSS 可能是最著名的动画库之一。

这里就向大家推荐这两个css动画库，这里我就不过多介绍这个两个库了，有兴趣的可以自行去了解一下

### 3.2 语法

```css
animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）
```

举个例子
```
/*执行一次line动画，运动时间2秒，运动曲线为 linear*/
animation: line 2s linear;
```
## 4 条形转换
条形转换分2D转换与3D转换

### 4.1 语法
```
transform:适用于2D或3D转换的元素
transform-origin：转换元素的位置（围绕那个点进行转换）。默认(x,y,z)：(50%,50%,0)
```

### 4.2  用法
```css
transform:rotate(30deg)
transform:translate(30px,30px)
transform:scale(.8)
```

## 5. 选择器
![img](/publice/img.png)
图片来自W3C。这一块强烈大家去w3c看([css手册参考](https://www.w3school.com.cn/cssref/css_selectors.asp))，那里的例子通俗易懂。我不重复讲了。

## 6. 阴影
以前没有css3的时候，或者需要兼容低版本浏览器的时候，阴影只能用图片实现，但是现在不需要，css3就提供了！
### 6.1 语法
```
box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）;
```
### 6.2 举个例子

```css
    box-shadow: 10px 10px 5px #888888 ;
```
## 7 边框
图片边框与边框圆角
### 7.1 图片边框语法
```
border-image: 
图片url 图像边界向内偏移 
图像边界的宽度(默认为边框的宽度) 
用于指定在边框外部绘制偏移的量（默认0） 
铺满方式--重复（repeat）、拉伸（stretch）或铺满（round）（默认：拉伸（stretch））;
```
### 7.2 举个例子
```css
    .item{
    border: 15px solid transparent;
    padding: 15px;
    border-image: url(border.png);
    border-image-slice: 30;
    border-image-repeat: round;
    border-image-outset: 0;
    }       
```
### 7.3 边框圆角语法
```
border-radius: n1,n2,n3,n4;
border-radius: n1,n2,n3,n4/n1,n2,n3,n4;
/*n1-n4四个值的顺序是：左上角，右上角，右下角，左下角。*/
```
## 8 背景
背景中主要有三个属性
### 8.1 背景图的使用与介绍
```css
    /*制定背景绘制（显示）区域  默认情况（从边框开始绘制）*/
     div{ background-clip: border-box }
    /*background-Origin属性指定background-position属性应该是相对位置 下面的div初始的html和css代码都是一样的*/
    div{ background-Origin: border-box }
    /*  这个相信很好理解，就是制定背景的大小 下面的div初始的html和css代码都是一样的  */
    div{ background-size: 10px }
```
## 9 flex弹性布局
<br/>
弹性盒子是一种用于按行或按列布局元素的一维布局方法，元素可以膨胀以填充额外的空间，
收缩以适应更小的空间，适用于任何元素上，如果一个元素使用了flex弹性布局（以下都会简称为：flex布局），
则会在内部形成BFC，flex布局已经得到了所有浏览器的支持，这意味着，现在就能放心，安全的使用这项技术。

### 9.1 Y轴与X轴
学习flex布局需要明白”X轴“与”Y轴“的概念，采用flex布局的元素，
称为”容器“ （ flex container），
它的所有子元素都是容器的”项目“（flex item），容器默认存在两根轴：
水平的X轴（main axis）和垂直的Y轴（cross axis）。
X轴的开始位置（与边框的交叉点）叫做 main start ，
结束位置叫做 main end ；Y轴的开始位置叫做 cross start ，结束位置叫做 cross end 。

### 9.2 属性

```
   // flex中有六大属性
    1.flex-direction
    2.flex-wtap
    3.flex-flow
    4.justify-content
    5.align-items
    6.align-content
```
