const express = require('express')
const config = require('./config')
const {Logs} = require('./routes')


const app = express()
const PORT = config.default.port

app.use('/logs', Logs)
 
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT} !! Start Logs Transaction APIs`)
})