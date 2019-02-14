const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/compute/:req_id', (req, res) => {
  console.log(req.body);
  res.send({message: 'Ok, good request'});
});

app.use('*', (req, res, next) => {
  res.status(404).send({error: 'No resource found'});
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}!`)
});
