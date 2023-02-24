const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello Welcome');
})

app.get('/changeURL', (req, res) => {
    res.send('<script>window.location.href="https://techtonicedu.com/";</script>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})