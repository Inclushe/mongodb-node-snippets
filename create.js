var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myappdatabase')

var User = require('./models/user')
var newUser = new User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
})

newUser.save(function (err) {
  if (err) throw err
  console.log('User saved successfully!')
  process.exit()
})