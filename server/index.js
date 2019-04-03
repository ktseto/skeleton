const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const port = 8000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/test', async (req, res, next) => {
  try {
    const result = await db.query('SELECT $1::text as message', ['Hello world!']);
    res.send(result.rows); // [{"message":"Hello world!"}]
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
