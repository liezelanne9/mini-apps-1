const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const router = require('./router');
const bodyParser = require('body-parser');


app.use(morgan('dev')); 

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist/'))) // serve my html

app.use('/api', router) // route all api requests to router localhost:3000/api


app.listen(port, () => console.log(`Server listening on port ${port}!`))