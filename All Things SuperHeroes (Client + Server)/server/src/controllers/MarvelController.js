const marvelAPI = require('marvel-api')
const jsonData = require('../../theconfig.json')

const prk = jsonData.prk
const pk = jsonData.pk

const marvel = marvelAPI.createClient({
    publicKey: pk,
    privateKey: prk
})

module.exports = {
    findChar(req, res) {
        if (req.body.characterName) {
            marvel.characters.findByName(req.body.characterName)
                .then(function (resp) {
                    res.send(resp.data)
                })
                .fail(console.error)
                .done()
            }
        },

    findSeries(req, res) {
        if (req.body.seriesName) {
            marvel.series.findByTitle(req.body.seriesName)
                .then(function (resp) {
                    res.send(resp.data)
                })
                .fail(console.error)
                .done()
            }
        },

    findEvent(req, res) {
        if (req.body.eventName) {
            marvel.events.findByName(req.body.eventName)
                .then(function (resp) {
                    res.send(resp.data)
                })
                .fail(console.error)
                .done()
        }
    }
}