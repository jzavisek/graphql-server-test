const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Promise = require('bluebird')

const { makeExecutableSchema } = require('graphql-tools')
const { apolloExpress, graphiqlExpress } = require('apollo-server')

const app = express()

// Setup middleware
app.use('*', cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup start method
app.start = async port => {
  console.log('Starting server ...')
  await Promise.fromCallback(done => app.listen(port, done))
  console.log('Server successfully started.')
}

module.exports = app
