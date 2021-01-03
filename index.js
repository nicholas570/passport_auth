const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const api = require('./routes/index');
require('./passport/config');

const port = process.env.PORT || 8080;
const app = express();

// mongoose
mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (error) => {
  // eslint-disable-next-line
  console.log(error);
});
mongoose.Promise = global.Promise;

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// router
app.use('/api', api);

// server
app.listen(port, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    // eslint-disable-next-line
    console.log(`server listening on port: ${port}`);
  }
});
