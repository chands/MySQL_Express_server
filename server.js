const express = require('express');
const pagesRoute = require('./routes/pages');
const apiRoute = require('./routes/api');
const path = require('path');

const app = express();
const port = 1432;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.use('/pages', pagesRoute);
app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname + '/public_static')));

app.listen(port, () => {
    console.log('server listening on port ' + port);
});