const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const publicPath = path.resolve(__dirname, "public");

var db = require('./db');
var mongoose = require('mongoose');
var CustomHero = mongoose.model('CustomHero');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(publicPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    const customHeroes = CustomHero.find(function (err, customHeroes, count){
        res.render('index', {'customHeroes': customHeroes});
    });
});

app.post('/', function (req, res) {
    if(req.body.name && req.body.description && req.body.image) {
        new CustomHero({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
        }).save(function (req, res){});
    }
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});