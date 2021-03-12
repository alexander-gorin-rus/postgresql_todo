const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./DB/db');

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

//routes
app.use('/api/v1', require('./routes/routes_todo'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    
    console.log(`This app listens port ${port}`)
})