'use strict'
require('dotenv').config()

const logOptions = {
  ops: {
    interval: 60000
  },
  reporters: {
    myConsoleReporter: [
      { module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      },
      { module: 'good-console' }, 'stdout']
  }
}

module.exports = async function register (server) {
  try {
    return await server.register([{
      plugin: require('./jwt')
    }, {
      plugin: require('hapi-router'),
      options: {
        routes: 'src/**/*.routes.js'
      }
    },
    {
      plugin: require('good'),
      options: logOptions
    }])
  } catch (err) {
    // Handle err
    console.log(err)
    // process.exit(1)
    throw err
  }
}
