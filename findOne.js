var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myappdatabase')

var User = require('./models/user')

User.find({username: 'starlord55'}, function (err, user) {
  if (err) throw err
  console.log(user)
})
