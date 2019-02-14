const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const util = require('./util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/compute/:req_id', (req, res) => {
  try {
    if (!req.body.timestamp) throw new Error('Timestamp is missing in request');

    const minuend = util.getMinuend(req.body);
    const subtrahend = util.getSubtrahend(req.body);

    if (minuend.length != subtrahend.length) throw new Error('Part 1 and 2 values size is not equal');

    const diff = util.getDiff(minuend, subtrahend);

    if (diff.includes(null) || diff.includes(NaN)) throw new Error('Diff contains non numeric values (probably due to non numeric values in request)');

    res.send({
      request_id: req.params.req_id,
      timestamp: req.body.timestamp,
      result: {
        title: "Result",
        values: diff
      }
    });
  } catch(error) {
    console.error(error);
    res.status(400).send({ error: "Request is not valid" });
  }

});

app.use('*', (req, res, next) => {
  res.status(404).send({error: 'No resource found'});
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}!`)
});
