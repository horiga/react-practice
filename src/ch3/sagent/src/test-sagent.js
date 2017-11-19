const request = require('superagent')

const URL = 'http://localhost:3000/fruits.json'
request.get(URL).end((err, res) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(res.body)
})
