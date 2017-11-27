const App = require('./app')

const app = new App()

const http = require('http')
const middleware1 = require('./middleware1')
const middleware2 = require('./middleware2')

app.use(middleware1)
app.use(middleware2)

const server = http.createServer(app.init((req, res) => {
  const endData = res.getHtml ? res.getHtml : res.getList
  res.end(endData)
}))

server.listen(8000, () => {
  console.log('server run in 8000')
})

