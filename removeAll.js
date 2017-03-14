var User = require('./models/user')

User.remove({}, function (err) {
  if (err) throw err
  console.log('Everybody\'s dead.')
})