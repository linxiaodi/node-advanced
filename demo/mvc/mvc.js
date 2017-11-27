// controler
const express = require('express')
const Login = require('./model')

const router = express.Router()
const path = require('path')
const controler = require('./controler')

router.get('/', (req, res) => {
  const { username, age } = req.query
  Login.insert(username, age)
  res.render(path.resolve(__dirname, 'view.ejs'), controler)
})

router.post('/all', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

module.exports = router

