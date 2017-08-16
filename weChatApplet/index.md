title: 微信小程序介绍
speaker: kun
<!-- zoomin  move stick zoomout -->
transition: move
theme: dark
usemathjax: yes
files: /css/style.css, /css/theme.dark.css


[slide]

# 微信小程序
## By：Kun

[slide]
<img class="br10" src="/img/01.jpg">


[slide data-transition="zoomout"]

# 简介 {:&.flexbox.vleft}

微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。不需要下载安装即可使用

[slide data-transition="zoomout"]
<img class="br10" src="/img/02.jpeg">
<img class="br10 ml10" src="/img/03.jpeg">

[slide data-transition="newspaper"]

# 开发流程 {:&.flexbox.vleft}

* 申请账号：个人、企业、政府、媒体等
* 下载开发者工具
* 开发、测试
* 上传代码
* 提交审核
* 发布

[slide]
## 申请账号：个人、企业、政府、媒体等

> 在微信公众平台官网首页点击右上角的“立即注册”按钮

<img class="br10" src="/img/04.png">

[mp.weixin.qq.com](https://mp.weixin.qq.com/)

[slide data-transition="stick"]
## 主体类型
<img class="br10" src="/img/05.png">

[slide data-transition="stick"]
### 企业类型 `认证费`（300）
<img class="br10" src="/img/06.jpg">

[slide data-transition="stick"]
## 主体信息不可变更
<img class="br10" src="/img/07.png">

[slide data-transition="stick"]
## 认证详情
<img class="br10" src="/img/08.jpg">

[slide data-transition="zoomout"]
## 绑定开发者
<img class="br10" src="/img/09.jpg">

[slide data-transition="zoomout"]
## 获取AppID
<img class="br10" src="/img/10.jpg">

[slide]
## 开发者工具 --> 登录
<img class="br10" style="width:50%" src="/img/11.png">


[slide]
## 创建项目
<div class="columns2">
    <img class="br10" style="max-width: 450px !important;" src="/img/12.png">
    <img class="br10" style="max-width: 450px !important;" src="/img/13.png">
</div>

[slide]
## 开发界面
<img class="br10" src="/img/14.png">

[slide]

# 工程架构 {:&.flexbox.vleft}

* <span class="gray">.json 配置文件</span>
* <span class="green">.js 页面逻辑 (model,controller)</span>
* <span class="blue">.wxml 页面内容 (view)</span>
* <span class="yellow">.wxss 展现样式</span>

[slide]
dev: __52dianying__
<img class="br10" src="/img/15.jpg">

[slide]

# 页面生命周期

onLoad: 页面加载
  一个页面只会调用一次。
  接收页面参数  可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。
 
onShow: 页面显示
  每次打开页面都会调用一次。
 
onReady: 页面初次渲染完成
  一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 
onHide: 页面隐藏
  当navigateTo或底部tab切换时调用。
 
onUnload: 页面卸载
  当redirectTo或navigateBack的时候调用。

[slide]

<div class="columns-2">
    <pre>
        <code class="markdown">
            
            onLoad: 页面加载
              一个页面只会调用一次。
              接收页面参数  可以获取wx.navigateTo和wx.redirectTo及navigator中的 query。
             
            onShow: 页面显示
              每次打开页面都会调用一次。
             
            onReady: 页面初次渲染完成
              一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
             
             
            onHide: 页面隐藏
              当navigateTo或底部tab切换时调用。
             
            onUnload: 页面卸载
              当redirectTo或navigateBack的时候调用。
            
        </code>
    </pre>
    <pre>
        <code class="markdown">
            <a target="_blank" href="http://files.jb51.net/file_images/article/201701/2017011916060712.png"><img class="br10" src="/img/lifetime_01.png"></a>
        </code>
    </pre>
</div>


[slide]

<img class="br10" src="/img/html5_wapp_diff.png">

[slide]

<img class="br10" src="/img/lifetime_01.png">

[slide]

# 场景值

[slide]

# 页面路由


[slide]

# 页面通信

* onShow/onHide + localStorage
* onShow/onHide + globalData
* eventBus方式
* globalData watcher方式
* 直接缓存页面PageModel

[slide]

# 组件

* 视图容器
* 基础内容
* 表单组件
* 导航
* 媒体组件
* 地图
* 画布
* 客服会话

map、canvas、video、textarea 是由客户端创建的原生组件，原生组件的层级是最高的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。 原生组件暂时还无法放在 scroll-view 上，也无法对原生组件设置 css 动画

[slide]

# websocket


[slide]

# 动画

* css animation
* wx.createAnimation

[slide]

# 客服

* <contact-button/>
* <button open-type="contact“>
* 调用客服消息接口发送客服消息
* 网页版客服工具

[slide]

# 实现原理


[slide]

# ES6支持

微信小程序运行在三端：iOS、Android 和 用于调试的开发者工具
在 iOS 上，小程序的 javascript 代码是运行在 JavaScriptCore 中
在 Android 上，小程序的 javascript 代码是通过 X5 内核来解析
在 开发工具上， 小程序的 javascript 代码是运行在 nwjs（chrome内核） 中
虽然尽管三端的环境是十分相似的，但是至少在目前还是有一些区别的，这给很多开发者带来很大的困扰。
在 0.10.101000 以及之后版本的开发工具中，会默认使用 babel 将开发者代码 ES6 语法转换为三端都能很好支持的 ES5 的代码，帮助开发者解决环境不同所带来的开发问题。开发者可以在项目设置中关闭这个功能。
需要注意的是：
这种转换只会帮助开发处理语法上问题，新的 ES6 的 API 例如 Promise 等需要开发者自行引入 Polyfill 或者别的类库。
为了提高代码质量，在开启 ES6 转换功能的情况下，默认启用 javasctipt 严格模式

[slide]

# 总结

优点：
相对简单的技术，封装完善的开发框架和开发工具，远低于原生的开发成本
相比与 web 技术更容易实现优质的用户体验
基于微信庞大的用户群，相比于原生 app 更容易推广
支持扫码即用，不像app一样需要下载安装

缺点：
功能受限
性能问题
安全问题
自动化测试
坑比较多




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
