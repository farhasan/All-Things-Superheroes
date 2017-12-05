const db = require('../db')
const mongoose = require('mongoose')
const CustomHero = mongoose.model('CustomHero')
const User = mongoose.model('User')

module.exports = {
    async listHeroes (req, res) {
       CustomHero.find({user : req.query.user}, function (err, customHeroes) {
           if (err) throw err
           res.send(customHeroes)
       })
    },

    async createHeroes (req, res) {
        if (req.body.name && req.body.description && req.body.image) {
            new CustomHero({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                user: req.body.user
            }).save(function (err, customHeroes) {
                if (err) {
                    res.status(400).send({
                        error: 'its an error!!'
                    })
                    console.log(err)
                }
                else {
                    res.send('success')
                }
            })
        }
    }
}
