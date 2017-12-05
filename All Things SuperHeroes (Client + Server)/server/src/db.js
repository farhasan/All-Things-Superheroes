const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

let CustomHero = new mongoose.Schema()

const User = new mongoose.Schema({ // user that registers and uses the site
  username: {
    type: String,
    required: 'Please enter a username',
    unique: true
  },
  hash: {
    type: String,
    required: 'Please enter a password'
  }
})

User.plugin(uniqueValidator)

CustomHero.add({ // customhero made by the user
  name: {
    type: String,
    required: 'Please enter a name for your hero'
  },
  description: {
    type: String,
    required: 'Please enter a description for your hero'
  },
  image: String,
  user: String
})

// is the environment variable, NODE_ENV, set to PRODUCTION?
if (process.env.NODE_ENV === 'PRODUCTION') {
  // if we're in PRODUCTION mode, then read the configration from a file
  // use blocking file io to do this...
  const fs = require('fs')
  const path = require('path')
  const fn = path.join(__dirname, 'theconfig.json')
  const data = fs.readFileSync(fn)

  // our configuration file will be in json, so parse it and set the
  // conenction string appropriately!
  const conf = JSON.parse(data)
  var dbconf = conf.dbconf
} else {
  // if we're not in PRODUCTION mode, then use
  dbconf = 'mongodb://localhost/example_db'
}

mongoose.connect(dbconf)

mongoose.model('User', User)
mongoose.model('CustomHero', CustomHero)
