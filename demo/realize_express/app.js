module.exports = class App {
  constructor() {
    this.middlewareChain = Promise.resolve()
    this.middlewareList = []
  }

  use(middleware) {
    // 创建中间件list
    this.middlewareList.push(middleware)
  }

  compose(req, res) {
    this.middlewareList.forEach((middleware) => {
      // 连接中间件
      this.middlewareChain = this.middlewareChain.then(() => {
        // 传递上下文到中间件
        // 中间件执行之后每个中间件都是类似new Promise((res,rej)=>{...// to do })
        return middleware(req, res)
      })
    })

    return this.middlewareChain
  }

  init(callback) {
    return (req, res) => {
      // 启动中间件
      this.compose(req, res).then(() => {
        // 回调
        callback(req, res)
      }).catch(() => {
        res.end('<h1 style="color:red;">request error</h1>')
      })
    }
  }
}
