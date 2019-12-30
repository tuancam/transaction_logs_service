const express = require('express')
const config = require('./config')
const app = express()
 
const PORT = config.port

app.get('/', function (req, res) {
  res.json({
    message: "project logs"
  })
})
app.get('/*', (req, res) => {
  res.json({
    message: "404"
  })
})
 
app.listen(PORT, () => {
  console.log('App listening !! Start Logs Transaction APIs');
});
