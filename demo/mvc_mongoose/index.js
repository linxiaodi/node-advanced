const router = require('express').Router()
const path = require('path')
const User = require('./service')

router.get('/', (req, res) => {
  res.render(path.resolve(__dirname, 'view.ejs'))
})

router.post('/register', async (req, res) => {
  const { username, pwd } = req.body
  const result = await User.register(username, pwd)
  res.json(result)
})
router.post('/login', async (req, res) => {
  const { username, pwd } = req.body
  const result = await User.login(username, pwd)
  res.json(result)
})

router.get('/all', async (req, res) => {
  const result = await User.showAllData()
  res.json(result)
})

module.exports = router
