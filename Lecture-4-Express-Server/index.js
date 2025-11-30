const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  const userName = req.query.name ? req.query.name : "Guest";
  res.send(`About Page ${userName}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
