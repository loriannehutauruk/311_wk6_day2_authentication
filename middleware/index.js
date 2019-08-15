const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  //req.originalUrl allows you to find whatever the url it is that you are working with. It's dynamic
  console.log('Logging route', req.originalUrl)
  next()
}
const authenticate = (req, res, next ) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}
module.exports = {
  logger,
  authenticate
}