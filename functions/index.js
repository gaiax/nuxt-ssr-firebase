const functions = require('firebase-functions');
const { Nuxt } = require('nuxt')

const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

exports.nuxtServer = functions.https.onRequest(async (request, response) => {
  const result = await nuxt.renderRoute(request.originalUrl, { request })
  response.send(result.html)
})
