const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/about', (req, res) => {
  const userName = req.query.name ? req.query.name : "Guest";
  res.render("about", { name: userName });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
