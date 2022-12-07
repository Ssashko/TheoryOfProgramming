const express = require('express');
let mongoose = require('mongoose');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/", express.static(path.join(__dirname, 'public') ) );




let db = require('./config/db');
console.log("connecting--", db);
mongoose.connect(db.url);


app.get('/route', function (req, res) {
    res.send('This is routing for the application developed using Node and Express...');
});
   
let Student = require('./app/models/students');


app.get('/api/students' , function(req, res) {
    
    Student.find(function(err,students) {
        if(err)
            res.send(err);
        res.json(students);
    });

});


app.post('/api/students/add', function (req, res) {
    let student = new Student();

    student.name = req.body.name;
    student.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'student created!' });
    });
});


app.delete('/api/students/:id', function (req, res) {
    Student.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
});

let angular_info = require('./routing');

app.get('*',function(req,res){  

    if (angular_info.url.includes(req.url))
        res.sendFile(path.join(__dirname, 'public/index.html'));
    else
        res.sendFile(path.join(__dirname, `public${req.url}`));

 });