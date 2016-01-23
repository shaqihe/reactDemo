### 是基于React 开发的一个小demo， 结构比较简单，趁个周末写的
#### [在线的dome地址是](http://118.192.156.85:8000/)http://118.192.156.85:8000/
---------------------
### 构建工具是 gulp + webpack


#### 启动(在这之前要安装node、git、gulp)

```
1.git clone https://github.com/shaqihe/sunweb.git
2.cd sunweb
3.npm install
4.gulp //启动gulp 服务器
5.因为数据是基于后端的爬虫系统，单独启动 前端 是无法获取数据，方便大家调试，提供一下我开发机的地址，
  配置如下： 在根目录的 gulpfile 文件中 var options = url.parse('XXXXX')；中的XX替换成
  'http://118.192.156.85:3000'。  用着方便，给个star，嘎嘎~

```
```
说明：
1.前后端是完全分离了，前端单要起单独的服务器。
2.后端是node 提供数据，数据是爬虫抓取的，为加快爬虫数据读写，数据存储用的是redis
3.样式是less
4.代码采用es6 jsx   用babel编译
5.文件结构比较简单
```
