const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

// /*
// const Comic = new mongoose.Schema({ //comic specific issue
//     title: String,
//     issueNumber: Number,
//     description: String,
//     image: String,
//     characters: [Character],
//     events: [Event]
// });
//
// const Character = new mongoose.Schema({ //comic book character
//   name: String,
//   description: String
//   //comics: [Comic],
//   //events: [Event]
// });
// /*
// const Event = new mongoose.schema({ //notable event in a comic book
//     title: String,
//     description: String,
//     comics: [Comic],
//     characters: [Character]
// });
// const User = new mongoose.Schema({ //user that registers and uses the site
//     username: String,
//     hash: String,
//     customHeroes: [CustomHero]
// });*/

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
  },
  customHeroes: [CustomHero]
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
  user: User
})

// mongoose.model('Character', Character);
// mongoose.model('Event', Event);
// mongoose.model('User', User);
// mongoose.model('Comic', Comic);

// is the environment variable, NODE_ENV, set to PRODUCTION?
if (process.env.NODE_ENV === 'PRODUCTION') {
  // if we're in PRODUCTION mode, then read the configration from a file
  // use blocking file io to do this...
  const fs = require('fs')
  const path = require('path')
  const fn = path.join(__dirname, 'config.json')
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
