const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

const pathName = path.join(__dirname, '/public')
app.use(express.static(pathName))

app.listen(port, ()=>{
    console.log('Listening...');
})