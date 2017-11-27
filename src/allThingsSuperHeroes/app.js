const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const crypto = require('crypto');
const path = require("path");
const publicPath = path.resolve(__dirname, "public");

var db = require('./db');
var mongoose = require('mongoose');
var CustomHero = mongoose.model('CustomHero');
var Character = mongoose.model('Character');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(publicPath));

app.set('view engine', 'hbs');

const customHeroesArray = [];

let character;

CustomHero.find(function (err, customHeroes){
    for (let hero of customHeroes) {
        customHeroesArray.push(hero);
    }
});

/*
Character.find(function (err, characters){
    for (let character of characters) {
            charactersArray.push(character);
    }
});*/

function replaceSpaces(name) {
    return name.replace(' ', '%20')
}

const fs = require('fs');
const fn = path.join(__dirname, 'config.json');
const data = fs.readFileSync(fn);

// our configuration file will be in json, so parse it and set the
// conenction string appropriately!
const obj = JSON.parse(data);
let prk = obj.marvel_private_key;
let pbk = obj.marvel_public_key;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let ts = (getRandomInt(1,10)).toString();
let fullhash = ts + prk + pbk;
let md5hash = crypto.createHash('md5').update(fullhash).digest('hex');

let url;

app.get('/', function (req, res) {
    res.render('index', {'customHeroes' : customHeroesArray});
});


app.post('/', function (req, res) {
        if (req.body.name && req.body.description && req.body.image) {
            new CustomHero({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image
            }).save(function (req, res) {
            });
            res.redirect('/');
        }

        else if (req.body.charName) {
            request(url = 'http://gateway.marvel.com/v1/public/characters?name=' +
                replaceSpaces(req.body.charName) +
                '&ts=' + ts + '&apikey=' + pbk + '&hash=' +
                md5hash,
                function(err, res, body){
                    if (err) {
                        console.log("No character found!");
                    }
                    else {
                        console.log('request made');
                        let json = JSON.parse(body);
                        setTimeout(function() {
                            character = json['data']['results'][0];
                        }, 1000);
                    }
                }
            );

            setTimeout(function() {
                res.redirect('/characters');
            }, 1500);
        }
    }
);


app.get('/characters', function (req, res) {
    //console.log(character);
    res.render('characters', {'character': character});
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});