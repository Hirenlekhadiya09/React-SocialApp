
//server.js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
console.log("{][][][]",__dirname)
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', ''));
});

app.listen(port);