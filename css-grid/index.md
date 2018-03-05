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
## column && row
* grid-template-column<span class="green">(列)</span>
* grid-template-row<span class="green">(行)</span>

```html
column: 指定的每个值来创建每列的列宽
row: 指定的每个值可以创建每行的高度
```
[demo](https://codepen.io/Frank_/pen/oEmEBX?editors=1100)


[slide]
## minmax()
函数来创建网格轨道的最小或最大尺寸
```html
    minmax()函数接受两个参数：
    第一个参数定义网格轨道的最小值，
    第二个参数定义网格轨道的最大值。
    可以接受任何长度值，也接受auto值。
    auto值允许网格轨道基于内容的尺寸拉伸或挤压。
```

```css
grid-template-rows: minmax(100px, auto); 
grid-template-columns: minmax(auto, 50%) 1fr 3em;
```
> 在这个示例中，第一行的高度最小值是100px，但其最大值为auto，允许行高可以变大超过100px。

[demo](https://codepen.io/Frank_/pen/ZrwRjZ?editors=1100)



[slide]
## repeat() 重复网格轨道
使用repeat()可以创建重复的网格轨道。

> 这个适用于创建相等尺寸的网格项目和多个网格项目。

```css
grid-template-columns: 60px repeat(2, 1fr);
grid-template-rows: repeat(2, 60px);
```
```html
也接受两个参数：
第一个参数定义网格轨道应该重复的次数;
第二个参数定义每个轨道的尺寸。
```
[demo](https://codepen.io/Frank_/pen/ZrwRjZ?editors=1100)



[slide]
## grid-gap 间距

只能创建列与列或行与行之间的间距
> 但不能创建列和行与网格容器边缘的间距

```css
// 行间距 20px
// grid-row-gap: 20px;
// 列间距 5rem
// grid-column-gap: 5rem;

#第一个值是设置grid-row-gap的值#
#第二个值设置grid-column-gap的值#
  grid-gap: 50px 1em;
```
[demo](https://codepen.io/Frank_/pen/yvwpLe?editors=1100)


[slide]
## 通过网格线号码来定位网格项目

```html
网格线实际上是代表线的开始、结束，
两者之间就是网格列或行。
```
> 每条线是从网格轨道开始，网格的网格线从1开始，每条网格线逐步增加1

<br>
<img class="br10" src="/img/c08.png">

[slide]
## 网格线号
<img class="br10" src="/img/c07.jpg">

[demo](https://codepen.io/Frank_/pen/jZJZZz?editors=1100)

[slide]
## 网格线号
```css
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 3;
```

```html
两列三行的网格创建三条列网格线和四条行网格线。
item1就是由行和列的号码重新定位。
----------------------------
如果一个网格项目跨度只有一行或一列，
那么grid-row-end和grid-column-end不是必需的。
```
<img class="br10" src="/img/c09.jpg">

[demo](https://codepen.io/Frank_/pen/jZJZZz?editors=1100)


[slide]
## 网格 
简写: 两个值

```html
grid-row是grid-row-start和grid-row-end的简写。
grid-column是grid-column-start和grid-column-end的简写。
```
```csss
grid-row: 2;
grid-column: 3 / 4;
```
```html
如果提供两个值，
第一个值是grid-row-start、grid-column-start的值，
第二个值是grid-row-end、grid-column-end的值，
两者之间必须要用/隔开。
```

[demo](https://codepen.io/Frank_/pen/jZJZZz?editors=1100)

[slide]
## 网格
简写: 四个值

```css
grid-area: 2 / 2 / 3 / 3;
```

```html
如果指定四个值:
第一个值对应grid-row-start，
第二个值对应grid-column-start，
第三个值对应grid-row-end
第四个值对应grid-column-end
```

[demo](https://codepen.io/Frank_/pen/jZJZZz?editors=1100)


[slide]
## 网格项目跨行或跨列

> 默认情况下网格项目跨度只有一个列和行，但可以跨越多个行和列

```css
grid-column-start: 1;
grid-column-end: 4;
```
```html
可以通过设置grid-column-end和grid-column-start距离多个网络线号实现多个列跨越。
```

<img class="br10" src="/img/c10.jpg">

[demo](https://codepen.io/Frank_/pen/RQdywY?editors=1100)


[slide]
## 网格项目跨行或跨列
```css
grid-row-start: 1;
grid-row-end: 5;
```
```html
同样的可以通过grid-row-end和grid-row-start距离多个网格号实现多个行跨越。
```
<img class="br10" src="/img/c11.jpg">

[demo](https://codepen.io/Frank_/pen/RQdywY?editors=1100)


[slide]
## 网格项目跨行或跨列  
> 合并 span

> 关键词span后面紧随数字，表示合并多少个列或行。

```css
grid-row: 2 / span 2;
grid-column: span 2;
```
<img class="br10" src="/img/c12.jpg">

[demo](https://codepen.io/Frank_/pen/RQdywY?editors=1100)



[slide]
## 网格线命名

* 定义网格时，网格线可以被命名。
* 网格线名称也可以设置网格项目位置。

```css
grid-template-rows:    [row-1-start] 1fr [row-2-start] 1fr [row-2-end];
grid-template-columns: [col-1-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-3-end];
```
```html
grid-template-rows和grid-template-columns定义你的网格，将名称分配给网格线。
分配网格线名称必须用方括号[网格线名称]，
然后后面紧跟网格轨道的尺寸值。
```
<img class="br10" src="/img/c13.png">

[demo](https://codepen.io/Frank_/pen/LQarGv?editors=1100)

[slide]
```html
可以在方括号中添加多个名称来命名网格线名称，
使用多外名称命名网格线名称时，
名称间要用空格隔开。
```
```css
grid-template-rows:    [row-start row-1-start] 1fr [row-1-end row-2-start] 1fr [row-2-end row-end];
grid-template-columns: [col-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-end];
```
<img class="br10" src="/img/c14.png"><br>
> 每一个网格线的名称可以用来定位网格项目的位置。



[slide]
## 通过网格线名称设置网格项目位置
```html
使用网格线名称设置网格项目位置和使用网格线号码设置网格项目位置类似。
```
```css
grid-row-start:    row-2-start;
grid-row-end:      row-end;
grid-column-start: col-2-start;
grid-column-end:   col-end;
```
<img class="br10" src="/img/c15.png"><br>
> 引用网格线名称的时候不应该带方括号

[demo](https://codepen.io/Frank_/pen/LQarGv?editors=1100)

[slide]
```html
grid-row和grid-column简写属性也适用于网格线名称，也可以用来设置网格项目的位置。
```
```css
grid-row:    row-2-start / row-end;
grid-column: col-2-start / col-end;
```
<img class="br10" src="/img/c16.png">

[demo](https://codepen.io/Frank_/pen/LQarGv?editors=1100)


[slide]
## 使用相同的名称命名网格线和设置网格项目位置
```html
使用repeat()函数可以给网格线分配相同的名称。
这可以节省一定的时间。
```
```css
grid-template-rows: repeat(3, [row-start] 1fr [row-end]);
grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
```

[slide]
```html
使用repeat()函数可以给网格线命名，
这也导致多个网格线具有相同的网格线名称。
~~~~~~~~~~~~~~~~~~~~~~
相同网格线名称指定网格线的位置和名称，
也且会自动在网格线名称后面添加对应的数字，
使其网格线名称也是唯一的标识符。
```
<img class="br10" src="/img/c17.png">


[slide]
### 使用相同的网格线名称可以设置网格项目的位置
```css
grid-row: row-start 2 / row-end 3;
grid-column: col-start / col-start 3;
```
> 网格线的名称和数字之间需要用空格分开。

```html
在这个示例中，
item1放置位置是row-start第2条开始，至row-end的第3条结束，
这用来设置item1在行的起始和结束位置；
-------------------
col-start的第1条开始，至col-start的第3条结束
（col-start的第3条也对应的是col-end的第2条），
用来设置item1在列的起始位置和结束位置。
```
<img class="br10" src="/img/c18.png">



[slide]
### 通过网格区域命名和定位网格项目
```html
像网格线名称一样，网格区域的名称也可以使用grid-template-areas属性来命名。
引用网格区域名称也可以设置网格项目位置。
```
```css
grid-template-areas: "header header"
                     "content sidebar"
                     "footer footer";
grid-template-rows:  150px 1fr 100px;
grid-template-columns: 1fr 200px;
```
```html
设置网格区域的名称应该放置在单引号或双引号内，每个名称由一个空格符分开。
网格区域的名称，每组（单引号或双引号内的网格区域名称）定义了网格的一行，
每个网格区域名称定义网格的一列。
```
<img class="br10" src="/img/c19.png">



[slide]
```html
grid-row-start、grid-row-end、
grid-column-start和grid-column-end
可以引用网格区域名称，用来设置网格项目位置。
```
```css
grid-row-start:    header;
grid-row-end:      header;
grid-column-start: header;
grid-column-end:   header;
```
<img class="br10" src="/img/c20.png">


[slide]
```css
grid-row:    footer;
grid-column: footer;
```
```html
简写的grid-row和grid-column也可以引用网格区域名称，
设置网格项目的位置。
```
<img class="br10" src="/img/c21.png">


[slide]
```css
grid-area: sidebar;
```
```html
grid-area简写属性也可以引用网格区域的名称来设置网格项目的位置。
```
<img class="br10" src="/img/c22.png">



[slide]
## 隐式网格










[slide]
## <span class="yellow3">参考资料</span>

+ http://www.css88.com/archives/8510
+ https://caniuse.com/#feat=css-grid
+ https://www.w3cplus.com/css/learncssgrid.html
+ yyy

[slide]
#完



