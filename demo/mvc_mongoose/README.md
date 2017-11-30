`npm i`
`npm test / npm start`
`mongod port = 27018`
`view on : http://localhost:3000/user`

## 使用MongodDB做登录注册
数据操作： find fineOne create

![注册](http://oph3rwqhn.bkt.clouddn.com/17-11-30/69475830.jpg)
![登录](http://oph3rwqhn.bkt.clouddn.com/17-11-30/76926721.jpg)
![展示所有数据](http://oph3rwqhn.bkt.clouddn.com/17-11-30/75887369.jpg)

`mvc_mongoose`
```
|--mvc_mongoose
      |-- mongo 
            |-- index.js // model层 
            |-- schema.js
      |-- service.js // control_service层
      |-- view.ejs // 前端 view层
      |-- index.js // controler
```
