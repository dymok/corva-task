const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/compute/:req_id', (req, res) => {
  const minuend = getMinuend(req.body);
  const subtrahend = getSubtrahend(req.body);

  const diff = minuend.values.map( (e, i) => {
    return e - subtrahend.values[i];
  });

  res.send({
    request_id: req.params.req_id,
    timestamp: req.body.timestamp,
    result: {
      title: "Result",
      values: diff
    }
  });
});

app.use('*', (req, res, next) => {
  res.status(404).send({error: 'No resource found'});
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}!`)
});

function getMinuend(obj) {
  return obj.data.find( e => e.title === 'Part 1' );
}

function getSubtrahend(obj) {
  return obj.data.find( e => e.title === 'Part 2' );
}
