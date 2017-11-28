const data = [
  {
    username: 'lwk',
    age: 24,
  },
]
const store = []

class Login {
  static insert(username, age) {
    data.push({ username, age })
  }

  static getUser() {
    return `hello ${data.username}`
  }

  static getAge() {
    return `您的年龄是：${data.age}`
  }

  static getData() {
    return data
  }
}

module.exports = class Sign {
  static signUp(username, pwd) {
    let code
    const s = this.find(username)
    if (s) {
      code = 1
    } else {
      store.push({
        username,
        pwd,
      })
      code = 0
    }
    return code
  }

  static signIn(username, pwd) {
    let code
    const s = this.find(username)
    if (s) {
      if (s.pwd === pwd) {
        code = 0
      } else {
        code = 1
      }
    } else {
      code = 2
    }
    return code
  }

  static find(username) {
    return store.find(item => item.username === username)
  }

  static getAllUser() {
    return store
  }
}
