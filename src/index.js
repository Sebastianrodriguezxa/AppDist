
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('src/public'));

app.get('/',(req, res)  =>{
    res.render("index.js")
});

app.listen(port, ()=> console.log('Server is en port ',port));