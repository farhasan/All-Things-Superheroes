const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/example_db');

const Character = new mongoose.schema({ //comic book character
    name: String,
    description: String,
    comics: [Comic],
    events: [Event]
});

const Event = new mongoose.schema({ //notable event in a comic book
    title: String,
    description: String,
    comics: [Comic],
    characters: [Character]
})

const customHero = new mongoose.schema({ //customhero made by the user
   name: String,
   description: String,
   image: String,
    user: User
});

const User = new mongoose.Schema({ //user that registers and uses the site
    username: String,
    hash: String,
    customHeroes: [customHero]
});

const Comic = new mongoose.Schema({ //comic specific issue
    title: String,
    issueNumber: Number,
    description: String,
    image: String,
    characters: [Character],
    events: [Event]
});


mongoose.model('Character', Character);
mongoose.model('Event', Event);
mongoose.model('customHero', customHero);
mongoose.model('User', User);
mongoose.model('Comic', Comic);