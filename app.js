const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const cors = require('cors');
app.use(cors());
require('dotenv').config();

const http = require('http');
const server = http.createServer(app);

const mongoose = require('mongoose');
mongoose.set('toJSON', { virtuals: true });


const db_url = '';

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () => {
    console.log('connected to the db');
    //mongoose.connection.db.dropDatabase();
}).catch((err) => {
    console.log('failed connecting to the db : ' + err);
});


const url = '/api/';
app.use(url + 'model', require('./routes/model'));
app.use(url + 'thing', require('./routes/thing'));
app.use(url + 'field', require('./routes/field'));
app.use(url + 'testing', require('./routes/testing'));



/*
// at the end so all except others
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
*/


const port = process.env.PORT || 8000;
server.listen(port, () => console.log('server started on ' + port));
