const express = require('express')
const app = express()
const compression = require('compression')

app.use(compression())
app.use(express.static('./dist'))

app.listen(3000, () => {
  console.log(`Example app listening on port`)
})
