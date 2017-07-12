title: flex
speaker: kun
transition: slide3
theme: dark
usemathjax: yes
files: /css/style.css, /css/theme.dark.css


[slide]

# 微信小程序
## By：Kun

[slide]

# 简介 {:&.flexbox.vleft}

微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。不需要下载安装即可使用

[slide]

# 开发流程 {:&.flexbox.vleft}

* 申请账号：个人、企业、政府、媒体等
* 下载开发者工具
* 开发、测试
* 上传代码
* 提交审核
* 发布

[slide]

# 工程架构 {:&.flexbox.vleft}

* .json 配置文件
* .js 页面逻辑 (model,controller)
* .wxml 页面内容 (view)
* .wxss 展现样式

[slide]

# 页面声明周期

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
            2
        </code>
    </pre>
</div>

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
