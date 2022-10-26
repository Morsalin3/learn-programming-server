const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/',(req, res)=>{
    res.send('learn programming api running');
});

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const selectCourse = courses.filter(course => course.category_id == id);
    res.send(selectCourse);
})

app.listen(port, () =>{
    console.log('learn progarmming server running on port', port);
})