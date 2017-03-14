var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myappdatabase')

var User = require('./models/user')
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password'
})

chris.dudify(function (err, name) {
  if (err) throw err
  console.log('Your new name is ' + name)
})

chris.save(function (err) {
  if (err) throw err
  console.log('User saved successfully!')
  process.exit()
})