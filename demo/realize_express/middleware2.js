module.exports = (req, res) => {
  return new Promise((resolve, reject) => {
    console.log(req.url === '/list', '====')
    if (req.url === '/list') {
      res.getList = '<h1>middleware2</h1>'
      resolve()
    } else {
      resolve()
    }
  })
}
