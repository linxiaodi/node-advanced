// create model
const { userSchema } = require('./schema')

const mongoose = require('mongoose')

const userModel = mongoose.model('user', userSchema)

mongoose.Promise = Promise

async function findUser(username) {
  const find = await userModel.findOne({ username })
  return find
}

async function signIn(username, password) {
  const find = await findUser(username)
  let status
  if (find) {
    status = password === find.password ? 1 : 2 // 1 登录成功 2 密码错误
  } else {
    status = 0 // 未注册
  }
  return status
}

async function signUp(username, password) {
  const find = await findUser(username)
  let status
  if (find) {
    status = 0
    // 0已注册，更换用户名
  } else {
    console.log(username, password)
    await userModel.create({ username, password })
    status = 1
    // 1 注册成功
  }
  return status
}

async function printAllUsers() {
  const list = await userModel.find()
  return list
}

module.exports = {
  signIn,
  signUp,
  printAllUsers,
}
