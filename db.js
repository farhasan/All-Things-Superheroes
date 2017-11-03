const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/example_db');

const Character = new mongoose.schema({
    name: String,
    description: String,
    comics: [Comic],
    events: [Event]
});

const Event = new mongoose.schema({
    title: String,
    description: String,
    comics: [Comic],
    characters: [Character]
})

const customHero = new mongoose.schema({
   name: String,
   description: String,
   image: String,
    user: User
});

const User = new mongoose.Schema({
    username: String,
    hash: String,
    customHeroes: [customHero]
});

const Comic = new mongoose.Schema({
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