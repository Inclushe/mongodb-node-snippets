var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myappdatabase')

var User = require('./models/user')

User.find({}, function (err, users) {
  if (err) throw err
  console.log(users)
})
