const express = require('express');
const models = require('./models');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const cors = require('cors')

const schema = require('./schema/schema');

const app = express();

app.use(cors())

// Replace with your mongoLab URI
const MONGO_URI = process.env.MONGO;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

module.exports = app;
