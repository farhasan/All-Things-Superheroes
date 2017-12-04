const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// var db = require('./db');
// var mongoose = require('mongoose');
// var CustomHero = mongoose.model('CustomHero');
// var Character = mongoose.model('Character');

// const request = require('request')
// const crypto = require('crypto')
// const path = require('path')
//
// var mongoose = require('mongoose')

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// function replaceSpaces(name) {
//   return name.replace(' ', '%20')
// }

require('./routes')(app)

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
