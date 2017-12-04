const marvelAPI = require('marvel-api')
const jsonData = require('../../theconfig.json')

const prk = jsonData.prk
const pk = jsonData.pk

const marvel = marvelAPI.createClient({
    publicKey: pk,
    privateKey: prk
})
//
// function signIn (user) {
//     const secondsInWeek = 60 * 60 * 24 * 7
//     return jwt.sign(user, config.authentication.jwtSecret, {
//         expiresIn: secondsInWeek
//     })
// }

module.exports = {
    findChar(req, res) {
        if (req.body.characterName) {
            let data;
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
            // let data
            marvel.series.findByTitle(req.body.seriesName)
                .then(function (resp) {
                    res.send(resp.data)
                })
                .fail(console.error)
                .done()
            }
        }
    }