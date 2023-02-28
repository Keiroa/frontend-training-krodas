const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('KQED Frontend Development Training - Kevin Rodas');
})

app.listen(port, () => {
  console.log(`Barebones Express Application listening on port ${port}`);
})