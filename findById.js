var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myappdatabase')

var User = require('./models/user')

// ids do not start in numerical order, so this doesn't work

User.findById(1, function (err, user) {
  if (err) throw err
  console.log(user)
})