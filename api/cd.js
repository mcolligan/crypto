const request = require('request');

const getData = (cb) => {
  request.get('https://api.coindesk.com/v1/bpi/historical/close.json', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(res.body)
    }
  })
}

module.exports = { getData };