# r2-copy-link

## 介绍

一个简单的 cloudflare r2 油猴脚本，可以复制 r2 文件的链接

## 使用

如图所示，选中文件，点击复制链接即可复制文件链接

## 已知问题

- 取消选中后，复制链接按钮不会消失
- 无法复制多个文件链接

以上问题均因为 r2 的 class 为随机字符，无法准确获取到 class，导致无法准确获取到选中的文件，所以无法解决

![使用](https://cdn.jsdelivr.net/gh/bling-yshs/ys-image-host@main/img/20240728084740.png)
