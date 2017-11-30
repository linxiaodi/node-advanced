const { signUp, signIn, printAllUsers } = require('./mongo')

class Users {
  static async register(username, password) {
    const status = await signUp(username, password)
    let result
    if (status === 0) {
      result = {
        message: '用户名已存在，请更换用户名',
      }
    } else {
      result = {
        message: '注册成功',
      }
    }
    return {
      ...result,
      status,
    }
  }
  static async login(username, password) {
    const status = await signIn(username, password)
    let result
    if (status === 0) {
      result = {
        message: '未注册',
      }
    } else if (status === 1) {
      result = {
        message: '登录成功',
      }
    } else {
      result = {
        message: '密码错误',
      }
    }
    return {
      ...result,
      status,
    }
  }
  static async showAllData() {
    const result = await printAllUsers()
    return result
  }
}

module.exports = Users
