const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname,'./')))

app.listen(process.env.PORT, () => console.log('Example app listening on port 3500!'))
