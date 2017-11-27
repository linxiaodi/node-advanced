const data = [
  {
    username: 'lwk',
    age: 24,
  },
]
module.exports = class Login {
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
