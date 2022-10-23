const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../build'));
app.use(express.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
