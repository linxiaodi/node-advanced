const Sign = require('./model')

module.exports = {
  signUp(username, pwd) {
    const status = Sign.signUp(username, pwd)
    if (status === 0) {
      return {
        code: 200,
        message: '注册成功',
      }
    } else {
      return {
        code: 404,
        message: '请更换用户名',
      }
    }
  },
  signIn(username, pwd) {
    const status = Sign.signIn(username, pwd)
    if (status === 0) {
      return {
        code: 200,
        message: '登录成功',
      }
    } else if (status === 1) {
      return {
        code: 404,
        message: '密码错误',
      }
    } else {
      return {
        code: 404,
        message: '您尚未注册',
      }
    }
  },
  allUser() {
    return Sign.getAllUser()
  },
}
