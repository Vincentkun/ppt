title: service worker
speaker: Kun
url: https://github.com/ksky521/nodePPT
transition: cards
files: /js/demo.js,/css/demo.css

[slide]

# service worker
## 演讲者：Kun



[slide]

在2014年，W3C公布了service worker的草案，service worker提供了很多新的能力，使得web app拥有与native app相同的离线体验、消息推送体验。
service worker是一段脚本，与web worker一样，也是在后台运行。作为一个独立的线程，运行环境与普通脚本不同，所以不能直接参与web交互行为。native app可以做到离线使用、消息推送、后台自动更新，service worker的出现是正是为了使得web app也可以具有类似的能力。

[slide]

## service worker可以：

* 后台消息传递
* 网络代理，转发请求，伪造响应
* 离线缓存
* 消息推送
*  ... 

[slide]

本文以资源缓存为例，说明一下service worker是如何工作的。

## 生命周期

> 先来看一下一个service worker的运行周期

<img class="br10" src="/img/css12.png">


[slide]

# 封面样式2 {:&.flexbox.vleft}
## 左对齐

[slide style="background-image:url('/img/bg1.png')"]

## 使用背景

[slide]
## 使用.class/#id/自定义属性样式
----

```javascript
alert('nodeppt');
```

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.2

Github：https://github.com/ksky521/nodePPT
