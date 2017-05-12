# Sharing
Use nodeppt for sharing.


## 安装

```bash
npm install -g nodeppt
```

## shell使用

### 启动

```bash
#进入文件内
cd demo
# 获取帮助
nodeppt start -h
# 绑定端口
nodeppt start -p <port>
```

### 或命令附带文件路径

```bash
nodeppt start -p 8090 -d ./demo
```


### 创建ppt
支持markdown语法快速创建网页幻灯片(默认:markdown)
```bash
nodeppt create ppt-name
```
如果需要创建html版本，可以使用：
```bash
nodeppt create ppt-name.html
# or
nodeppt create ppt-name.htm
```


### 导出ppt

#### html版

```bash
# 导出全部，包括nodeppt的js、img和css文件夹
# 默认导出在publish文件夹
nodeppt generate ./ppt/demo.md -a
# 指定导出文件夹
nodeppt generate ./ppt/demo.md output/path -a
```

参考 [nodeppt](https://github.com/ksky521/nodePPT "nodeppt")