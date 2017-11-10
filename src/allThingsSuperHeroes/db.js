const mongoose = require('mongoose');

const User = new mongoose.Schema({ //user that registers and uses the site
    username: String,
    hash: String,
    customHeroes: [CustomHero]
});

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
});

const CustomHero = new mongoose.schema({ //customhero made by the user
   name: String,
   description: String,
   image: String,
    user: User
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
mongoose.model('CustomHero', CustomHero);
mongoose.model('User', User);
mongoose.model('Comic', Comic);

mongoose.connect('mongodb://localhost/example_db');