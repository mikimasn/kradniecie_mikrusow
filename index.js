const { Console } = require('console')
const https = require('https');
const notifier = require('node-notifier');
const options = {
  hostname: 'mikr.us',
  port: 443,
  path: '/recykling.txt',
  method: 'GET'
}

const req = https.request(options, res => {

  res.on('data', d => {
    d=d.toString()
    var test = "test";
    console.log(d);
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()