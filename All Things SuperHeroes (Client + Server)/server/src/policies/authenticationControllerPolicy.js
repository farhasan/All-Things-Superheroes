const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      username: joi.string().alphanum().min(3).max(30).required(),
      password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    }

    const {error, value} = joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'The username can only contain numbers or letters'
          })
          console.log(error)
          break
        case 'password':
          res.status(400).send({
            error: 'The password must have lower case, capitals, and/or numbers'
          })
          console.log(error)
          break
        default:
          res.send(400).send({
            error: 'Something went wrong! Try again'
          })
          console.log(error)
      }
    }
    else next()
  }
}