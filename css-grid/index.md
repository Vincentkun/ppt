title: grid
speaker: kun
transition: slide3
theme: moon
usemathjax: yes
files: /css/style.css

[slide]
# CSS3 Grid

[slide]
<img class="br10" src="/img/c01.jpg">


[slide]
css布局： <span class="yellow">Table</span> **->** <span class="blue">Float + Position </span>**-->** <span class="green">Flex</span>


[slide]
CSS Grid(网格) 布局（又称为 “Grid(网格)” ），<br>
是一个`二维`的基于网格的布局系统.<br>
它的目标是完全改变我们基于网格的用户界面的布局方式。


[slide]
CSS Grid布局是目前CSS 中最强大的布局系统。<br>
与 **flexbox** 的一维布局系统不同，<br>
CSS Grid 布局是一个二维布局系统，<br>
也就意味着它可以同时处理`列和行`。

[slide]
通过将 CSS 规则应用于 <br>
**父元素** (成为 Grid Container 网格容器)<br>
及 **子元素**（成为 Grid Items 网格项），<br>
你就可以轻松使用 Grid(网格) 布局。


[slide]
### 浏览器支持[caniuse](https://caniuse.com/#feat=css-grid)
<img class="br10" src="/img/c02.jpg">


[slide]
## 重要术语
* 网格容器(Grid Container)
* 网格项(Grid Item)
* 网格线(Grid Line)
* 网格轨道(Grid Track)
* 网格单元格(Grid Cell)
* 网格区域(Grid Area)
* Grid(网格) 属性目录


[slide]
## 网格容器 
Grid Container: 应用 display: grid 的元素。<br>
这是所有网格项（Grid Items）的直接父级元素。
```html
    ## 在这个例子中，container 就是 网格容器(Grid Container) ##
    <div class="container">
        <div class="item item-1"></div>
        <div class="item item-2"></div>
        <div class="item item-3"></div>
    </div>
```


[slide]
## 网格项
Grid Item: 网格容器（Grid Container）的子元素。<br>
**（例如直接子元素）**
```html
    /** 注意 item 元素就是网格项(Grid Item)
    但是 sub-item 不是。 **/
    <div class="container">
        <div class="item"></div> 
        <div class="item">
            <p class="sub-item"></p>
        </div>
        <div class="item"></div>
    </div>
```


[slide]
## 网格线
Grid Line: 构成网格结构的分界线。<br>
它们既可以是垂直的（“列网格线(column grid lines)”）<br> 
也可以是水平的（“行网格线(row grid lines)”）<br>
并位于行或列的任一侧
```html
例如，这里的黄线就是一条列网格线
```
<img class="br10" src="/img/c03.png">


[slide]
## 网格轨道
Grid Track: 两条相邻网格线之间的空间。<br>
你可以把它们想象成网格的列或行
```html
图是第二条和第三条 行网格线 之间的 网格轨道。
```
<img class="br10" src="/img/c04.png">


[slide]
## 网格单元格
Grid Cell: 两个相邻的行和两个相邻的列网格线之间的空间。<br>
这是 Grid(网格) 系统的一个“单元”。
```html
图第1至第2条 行网格线 和第2至第3条 列网格线 交汇构成的 网格单元格
```
<img class="br10" src="/img/c05.png">


[slide]
## 网格区域
Grid Area: 4条网格线包围的总空间。<br>
一个网格区域可以由任意数量的网格单元格组成。
```html
图是 行网格线1和3，以及列网格线1和3 之间的网格区域。
```
<img class="br10" src="/img/c06.png">


[slide]
## Grid(网格) 属性目录
**容器的属性** &#91;16个&#93;
```css
* display
* grid-template-columns
* grid-template-rows
* grid-template-areas
* grid-template
* grid-column-gap
* grid-row-gap
* grid-gap
* justify-items
* align-items
* justify-content
* align-content
* grid-auto-columns
* grid-auto-rows
* grid-auto-flow
* grid
```


[slide]
## Grid(网格) 属性目录
**网格项的属性** &#91;9个&#93; 
```css
* grid-column-start
* grid-column-end
* grid-row-start
* grid-row-end
* grid-column
* grid-row
* grid-area
* justify-self
* align-self
```

[slide]
## display
```css
.container {
    display: grid | inline-grid | subgrid;
}
```


[slide]
## 父元素 网格容器 属性 **display** <br>
> 将元素定义为网格容器,并为其内容建立新的 网格格式上下文。

* <span class="green">grid</span> ：生成一个块级网格
* <span class="green">inline-grid</span> ：生成一个内联网格
* <span class="green">subgrid</span> ：嵌套网格
```html
 subgrid:你希望它的行/列的大小继承自它的父级网格容器，而不是自己指定的。
```


[slide]
## 显式网格
* grid-template-column<span class="green">(列)</span>
* grid-template-row<span class="green">(行)</span>

```html
column: 指定的每个值来创建每列的列宽
row: 指定的每个值可以创建每行的高度
```
[demo](https://codepen.io/Frank_/pen/oEmEBX?editors=1100)


[slide]
## grid-template-areas
```html
通过引用 grid-area 属性指定的 网格区域(Grid Area) 名称来定义网格模板。
重复网格区域的名称导致内容跨越这些单元格。
一个点号（.）代表一个空的网格单元。
这个语法本身可视作网格的可视化结构。
```





[slide]
### 「inline-flex」 与 inline-block 
<pre>
    <code class="css pl30">
    .flex,
    .inline-flex{
        width:100px;
        height:50px;
        border:1px solid #000;
    }
    .flex{
        display:flex;
    }
    .inline-flex{
        display:inline-flex;
    }
    </code>
</pre>
<iframe class="br10" style="width:300px" data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo1.html" src="about:blank;"></iframe>



[slide]
###Webkit内核的浏览器，必须加上`-webkit`前缀。
<pre>
    <code class="css pl10">
    .box{
        display: -webkit-flex; /* Safari */
        display: flex;
    }
    </code>
</pre>

>  注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

[slide]
* 采用Flex布局的元素，称为Flex容器，简称"容器"
* 它的所有子元素自动成为容器成员，称为Flex项目，简称"项目"
---
<img class="br10" src="/img/css09.png">

[slide]

> flex布局发生在`父容器`和`子容器`之间。父容器需要有flex的环境(display:flex;)，子容器才能根据自身的属性来布局，简单的说，就是瓜分父容器的空间。相反就是说如果父容器没有flex的环境，那么子容器就无法使用flex的规则来划分父容器的空间。


[slide]
* 水平的主轴main axis和垂直的交叉轴（cross axis）
* 主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end
* 交叉轴的开始位置叫做cross start，结束位置叫做cross end
* 项目默认沿主轴排列
* 单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size
---
<img class="br10" src="/img/css10.png">


[slide]
##容器的属性 &#91;**6个**&#93;
---
* <span class="green">flex-direction</span>
* <span class="green">flex-wrap</span>
* <span class="green3">flex-flow</span>
* <span class="blue">justify-content</span>
* <span class="blue">align-items</span>
* <span class="yellow">align-content</span>



[slide]
##(A1) flex-direction 
###「容器属性」决定主轴的方向（即项目的排列方向）
<pre>
    <code class="css pl10">
    .box {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    </code>
</pre>

[slide]
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。
---
<img class="br10" src="/img/css12.png">

[slide]
###Flex-direction Demo
---
<pre>
    <code class="css pl10">
    .box {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    </code>
</pre>
<iframe style="height:160px" class="br10"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo2.html"></iframe>
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo2.html)



[slide]
##(A2) flex-wrap 
###「容器属性」定义如果一条轴线排不下，如何换行 
[默认情况下，项目都排在一条轴线上]
可取**3**个值
<pre>
    <code class="css pl10">
        .box{
            flex-wrap: nowrap | wrap | wrap-reverse;
        }
    </code>
</pre>
<img class="br10" src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png">

[slide]
###（1）nowrap（默认）：不换行
---
<img class="br10"  src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png">


[slide]
### (2）wrap：换行，第一行在上方
---
<img class="br10"  src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg">

[slide]
### (3) wrap-reverse：换行，第一行在下方
---
<img class="br10"  src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg">

[slide]
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo7.html)  
<div class="columns-2">
    <pre>
        <code class="css pl10">
            .nowrap{
                flex-wrap:nowrap;
            }
            .wrap{
                flex-wrap:wrap;
            }
            .wrap-reverse{
                flex-wrap:wrap-reverse;
            }
        </code>
    </pre>
    <iframe class="br10"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo7.html"></iframe>
</div>


[slide]
##(A3) flex-flow 
###「容器属性」是flex-direction和flex-wrap的简写形式
[默认值为**row** **nowrap**]
<pre>
    <code class="css pl10">
        .box{
            flex-flow: flex-direction || flex-wrap;
        }
    </code>
</pre>


[slide]
##(A4) justify-content 
###「容器属性」定义了项目在主轴上的对齐方式
<pre>
    <code class="css pl10">
        .box {
            justify-content: flex-start | flex-end | center | space-between | space-around;
        }
    </code>
</pre>

[slide]
##它可能取**5**个值，具体对齐方式与**轴的方向**有关
---
* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等
* space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边框的间隔大一倍

[slide]
##[下面假设主轴**从左到右**]
<img class="br10" src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png">

[slide]
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo3.html)  
<div class="columns-2">
    <pre>
        <code class="css pl10">
            .flex-start{
                justify-content:flex-start;
            }
            .flex-end{
                justify-content:flex-end;
            }
            .center{
                justify-content:center;
            }
            .space-between{
                justify-content:space-between;
            }
            .space-around{
                justify-content:space-around;
            }
        </code>
    </pre>
    <iframe class="br10"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo3.html"></iframe>
</div>


[slide]
##(A5) align-items 
###「容器属性」定义项目在交叉轴上如何对齐
<pre>
    <code class="css pl10">
        .box {
            align-items: flex-start | flex-end | center | baseline | stretch;
        }
    </code>
</pre>

[slide]
##它可能取**5**个值，具体对齐方式与**交叉轴**有关
---
* flex-start：交叉轴的起点对齐
* flex-end：交叉轴的终点对齐
* center：交叉轴的中点对齐
* baseline: 项目的第一行文字的基线对齐
* stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度

[slide]
##[下面假设交叉轴**从上到下**]
<img class="br10" src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png">

[slide]
<pre>
<code class="css">
    .box {
        align-items: flex-start | flex-end | center | stretch | baseline;
    }
</code>
</pre>
<iframe class="br10" style="height:200px"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo4.html"></iframe>
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo4.html)  



[slide]
##(A6) align-content 
###「容器属性」定义了多根轴线的对齐方式
---
#####**[如果项目只有一根轴线，该属性不起作用]** 
<pre>
    <code class="css pl10">
        .box {
           align-content: flex-start | flex-end | center | space-between | space-around | stretch;
        }
    </code>
</pre>

[slide]
##它可能取**6**个值
* flex-start：与交叉轴的起点对齐
* flex-end：与交叉轴的终点对齐
* center：与交叉轴的中点对齐
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
* space-around：每根轴线两侧的间隔都相等,所以轴线之间的间隔比轴线与边框的间隔大一倍
* stretch（默认值）：轴线占满整个交叉轴

[slide]
### <span class="text-danger">如果项目只有一根轴线，该属性不起作用</span>
---
<img class="br10" src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png">


[slide]
<pre>
<code class="css">
    .box {
        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }
</code>
</pre>
<iframe class="br10" style="height:400px"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo6.html"></iframe>
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo6.html)  



[slide]
##项目的属性 &#91;**6个**&#93;
---
* <span class="blue">order</span>
* <span class="green2">flex-grow</span>
* <span class="green2">flex-basis</span>
* <span class="green2">flex-shrink</span>
* <span class="text-success">flex</span>
* <span class="yellow">align-self</span>


[slide]
##(B1) order 
###「项目属性」定义项目的排列顺序
---
<pre>
    <code class="css pl30">
    .item {
        order: 1;
    }
    </code>
</pre>

[slide]
### [**数值越小,排列越靠前，默认为0**]
---
<img class="br10" src="/img/css34.png">

[slide]
### order Demo
---
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo8.html)
<div class="columns-2">
    <pre>
        <code class="css pl10">
        .order1{
            order:1;
            background:#c00;
        }
        .order2{
            order:2;
            background:#069;
        }
        .order3{
            order:3;
            background:#095;
        }
        </code>
    </pre>
    <iframe style="height:160px;margin-top:120px" class="br10"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo8.html"></iframe>
</div>


[slide]
##(B2) flex-grow 
###「项目属性」定义项目的放大比例
---
#### [**默认为0,即如果存在剩余空间，也不瓜分**]
<pre>
    <code class="css pl25">
    .item {
        flex-grow: 0; /* default 0 */
    }
    </code>
</pre>
<img class="br10" src="/img/css37.png">

[slide]
### flex-grow Demo
---
<div class="columns-2">
    <p style="font-size: 18px;text-align:left;">如果所有项目的flex-grow属性都为1，<br>则它们将等分剩余空间（如果有的话）</p>
    <p style="font-size: 18px;text-align:left;">如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</p>
</div>
<pre>
    <code class="css pl10">
    .item {
        flex-grow: 0; /* default 0 */
    }
    </code>
</pre>
---
[demo](https://codepen.io/Frank_/pen/EmEPQm?editors=1100)

[slide]
##(B3) flex-basis 
###「项目属性」定义了在分配多余空间之前，项目占据的主轴空间（main size）

### [**浏览器根据这个属性，计算主轴是否有多余空间**]
---
#### [**它的默认值为auto，即项目的本来大小**]
<pre>
    <code class="css pl25">
    .item {
        flex-basis: 1 | auto; /* default auto */
    }
    </code>
</pre>

[slide]
### flex-basis Demo
---
#### [**我们通过案例来解释**]
<pre>
    <code class="css pl10">
    .item {
        flex-basis: 1 | auto; /* default auto */
    }
    </code>
</pre>
---
[demo](https://codepen.io/Frank_/pen/VbXjxm?editors=1100)

[slide]

> 上面讲的<span class="green">flex-grow</span>、<span class="green">flex-basis</span>都是剩余空间的分配。但是，你有没有想过还有没有其他的情况呢？可以发现，上面讲的例子item1 item2 item3的宽度总和都是`没有超过`父容器的宽度的。 那如果三个子容器的`宽度和超过`父容器的宽度呢？那还有剩余空间可以分配吗，此时浏览器又是怎么处理呢？请看下面：


[slide]
##(B4) flex-shrink 
###「项目属性」定义了项目的缩小比例，默认为1
---
#### [**即如果空间不足，该项目将缩小**]
<pre>
    <code class="css pl25">
    .item {
        flex-shrink: 1; /* default 1 */
    }
    </code>
</pre>

[slide]
### flex-shrink Demo
---
#### [**不太好理解 我们通过案例来解释**]
<pre>
    <code class="css pl10">
    .item {
        flex-grow: 1; /* default 0 */
    }
    </code>
</pre>
---
[demo](https://codepen.io/Frank_/pen/LydNrv?editors=1100)


[slide]
##(B5) flex 
###「项目属性」简写，默认值为: **0 1 auto**
### <span class="green">flex-grow</span>,<span class="green">flex-shrink</span> 和 <span class="green">flex-basis</span>
### [**后两个属性可选**]
---
<pre>
    <code class="css pl20">
    .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }
    </code>
</pre>

[slide]
### 该属性有两个快捷值
---
<pre>
    <code class="css pl20">
    .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }
    </code>
</pre>
* <span class="yellow">auto</span> <span class="green">(1 1 auto)</span>
* <span class="yellow">none</span> <span class="green">(0 0 auto)</span>

[slide]
### flex Demo
---
#### [**建议优先使用这个属性,因为浏览器会推算相关值**]
<pre>
    <code class="css pl10">
    .item {
        flex: <'flex-grow'> <'flex-shrink'> <'flex-basis'>
    }
    .item1{
        flex:1 2 200px;
        background:#c00;
    }
    .item2{
        flex:2 1 100px;
        background:#069;
    }
    </code>
</pre>
<iframe style="height:160px;" class="br10"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo9.html"></iframe>
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo9.html)



[slide]
##(B6) align-self 
###「项目属性」允许单个项目有与其他项目不一样的对齐方式
### [**可覆盖align-items属性**]
---

```html
默认值为 auto, 表示继承父元素的align-items属性

如果没有父元素，则等同于stretch
```
<pre>
    <code class="css pl0">
    .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
    </code>
</pre>

[slide]
### <span class="text-danger">可取6个值，除了auto，其他都与align-items属性完全一致</span>
<pre>
    <code class="css pl0">
    .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
    </code>
</pre>
<img class="br10" src="/img/css46.png">

[slide]
### align-self Demo
---
#### [**建议优先使用这个属性,因为浏览器会推算相关值**]
<pre>
    <code class="css pl10">
    .item2{
        align-self:baseline;
        line-height: 30px;
        background:#095;
    }
    </code>
</pre>
<iframe style="height:160px;" class="br10"  data-src="http://www.oxxostudio.tw/demo/201501/css-flexbox-demo5.html"></iframe>
[demo](http://www.oxxostudio.tw/demo/201501/css-flexbox-demo5.html)



[slide]

<div class="columns-2">
<pre>
<code class="markdown">
> 容器的属性 &#91;6个&#93;

* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content
</code>
</pre>
<pre>
<code class="markdown">
> 项目的属性 &#91;6个&#93; 

* order
* flex-grow
* flex-basis
* flex-shrink
* flex
* align-self
</code>
</pre>
</div>


[slide]
## <span class="yellow3">参考资料</span>

+ http://www.css88.com/archives/8510
+ https://caniuse.com/#feat=css-grid
+
+

[slide]
#完



