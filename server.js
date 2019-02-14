const express = require('express');
const app = express();
const port = 3000;

app.post('/compute/:req_id', (req, res) => {
  res.send({message: 'Ok, good request'});
});

app.use('*', (req, res, next) => {
  res.status(404).send({error: 'No resource found'});
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}!`)
});
