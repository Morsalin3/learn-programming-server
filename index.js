const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/',(req, res)=>{
    res.send('learn programming api running');
});

app.listen(port, () =>{
    console.log('learn progarmming server running on port', port);
})