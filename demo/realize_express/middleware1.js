const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  console.log(req.url)
  return new Promise((resolve, reject) => {
    console.log(req.url === '/', '-------')
    if (req.url === '/') {
      const filePath = path.resolve(__dirname, './index.html')
      fs.readFile(filePath, 'utf-8', (err, data) => {
        res.getHtml = data
        resolve()
      })
    } else {
      resolve()
    }
  })
}
