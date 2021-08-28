const https = require('https');
const notifier = require('node-notifier');
const path = require('path');
const options = {
  hostname: 'pastebin.com',
  port: 443,
  path: '/raw/cRgE07hM',
  method: 'GET'
}

const req = https.request(options, res => {

  res.on('data', d => {
    d=d.toString()
    var test = "test";
    var lines = d.split("\n");
    lines.forEach(element => {
        if(element.split(';')[1]=="3.0"&&element.split(';')[3].split('=')[1]>180)
        {
          notifier.notify(
            {
              title:"Mikrus",
              message:"Mikrus 3.0 >180dni detected",
              icon:path.join(__dirname,'vps_1.png')
              }
            );
        }
    });
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()