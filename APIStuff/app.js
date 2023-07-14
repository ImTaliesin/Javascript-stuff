const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Wake the fuck up samurai, we got a city to burn')
})

app.listen(3000, () => {
    console.log('Wake the fuck up samurai, check port 3000.')
})

