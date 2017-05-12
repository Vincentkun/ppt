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


### 导出ppt

#### html版

```bash
# 导出全部，包括nodeppt的js、img和css文件夹
# 默认导出在publish文件夹
nodeppt generate ./ppt/demo.md -a
# 指定导出文件夹
nodeppt generate ./ppt/demo.md output/path -a
```

