// controler
const express = require('express')
const Login = require('./model')

const router = express.Router()
const path = require('path')
const controler = require('./controler')

router.get('/', (req, res) => {
  const { username, age } = req.query
  res.render(path.resolve(__dirname, 'view.ejs'))
})

router.get('/all', (req, res) => {
  res.json(controler.allUser())
})

router.post('/signup', (req, res) => {
  const { username, pwd } = req.body
  console.log(req.body)
  res.json(controler.signUp(username, pwd))
})

router.post('/signin', (req, res) => {
  const { username, pwd } = req.body
  res.json(controler.signIn(username, pwd))
})

module.exports = router

