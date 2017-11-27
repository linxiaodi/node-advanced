const Login = require('./model')

module.exports = {
  getUser() {
    return Login.getUser()
  },
  getAge() {
    return Login.getAge()
  },
  getData() {
    return Login.getData()
  },
}