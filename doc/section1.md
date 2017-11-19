## note in 2017-11-13

## http 概述
1. HTTP 是简单的
2. HTTP 是可扩展的（需要再服务端和客户端再新的headers上语义达成一致）
3. HTTP 是无状态，有会话的
4. HTTP 链接（实际上是TCP长链接和短链接，关键在于`Connection:Keep-Alive`）

### DNS与域名
Q:为什么用域名访问而不用DNS访问？
A:为了免于记忆一串无规则IP，访问域名实际访问的是它的DNS，域名是映射到DNS上面的

## 关于port
22 ssh
80 http
![image](http://upload-images.jianshu.io/upload_images/3218771-3d0d8fd6405df4f5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
443 https
![image](http://upload-images.jianshu.io/upload_images/3218771-4bc154bd50dab0c2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
27017 mongoDB
Q:为什么URL看不到端口号
A:浏览器的协议一般是http／https，所以一般访问的是默认端口

### http报文格式
- 格式：
  request:
  ![request](http://upload-images.jianshu.io/upload_images/3218771-966e0f889cf36c3e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  response:
  ![response](http://upload-images.jianshu.io/upload_images/3218771-949acb6cda430168.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- status code解析：
  1xx: hold on
  2xx: here you go
  3xx: go away
  4xx: you fucked up
  5xx: I fucked up
- http常见字段
  Host 指明请求的地址
  Server 服务器信息
  Content-Type 请求体的格式,如 xxx/www-url-encoded-form-dat application/json
  Accept: 接受的返回格式
  Accept-Encoding：接受的请求编码
  Accept-Language：接受的语言
  Pragma：兼容http1.0的缓存
  Connection: close/keep alive 是短连接还是长连接
  Cache-Control:缓存策略
  User-Agent:发送请求的应用程序名称
  Via:走过的服务器链路信息
  Referer:表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面。

### `Cache-Control`与http缓存机制

> 重用已获取的资源能够有效的提升网站与应用的性能。

常见`Cache-Control`的值：
- no-cache:相当于`max-age:0,must-revalidate`即资源被缓存, 但是缓存立刻过期, 同时下次访问时强制验证资源有效性。
- private:资源仅仅被缓存到客户端
- public:资源将被客户端和代理服务器缓存
- max-age:设置缓存过期时间(s)，如果过了过期时间，则重新往服务器发送请求。
- no-store:缓存中不得存储任何关于客户端请求和服务端响应的内容。

> 缓存过期i

1. 缓存存储策略：
以上值的前4者都是可以缓存资源到本地（特别是no-cache台太有迷惑性了），但是并不意味着一定可以使用本地缓存。使用本地缓存还需要一套鉴别机制。

2. 缓存时间过期策略：
缓存的时间过期机制最重要的是：`Cache-Control:max-age=${second}`，`max-age`是距离请求发起的时间的秒数，如果时间过期，则会从服务器重新获取。还有另外一个Expire属性也可以标明从法从请求时间开始到指定的时间内可以使用本地缓存，否则需要重新下载。如果Expire与max-age共存，max-age的优先级是大于Expire。

3. 缓存对比策略：
如果缓存时间过期后，继续请求该资源，现在浏览器会有2种做法：
- 根据上次响应中的ETag, 自动往request header中添加If-None-Match字段. 服务器收到请求后, 拿If-None-Match字段的值与资源的ETag值进行比较, 若相同, 则命中协商缓存, 返回304响应.
- 根据上次响应中的Last-Modified, 自动往request header中添加If-Modified-Since字段. 服务器收到请求后, 拿If-Modified-Since字段的值与资源的Last-Modified值进行比较, 若相同, 则命中协商缓存, 返回304响应.

### 看一些请求报文
缓存时间过期：
![截取自mdn network](http://upload-images.jianshu.io/upload_images/3218771-dd989d7b374501d6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![截取自极简图床](http://upload-images.jianshu.io/upload_images/3218771-4dec72c4402de7a8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![截取自极简图床](http://upload-images.jianshu.io/upload_images/3218771-f014f2f87042937b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> Reference:
[彻底弄懂 HTTP 缓存机制 —— 基于缓存策略三要素分解法
](http://geek.csdn.net/news/detail/131318)[浏览器缓存机制剖析](http://louiszhai.github.io/2017/04/07/http-cache/)
