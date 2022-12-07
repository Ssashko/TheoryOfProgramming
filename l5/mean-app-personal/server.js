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
   
let Student = require('./app/models/students').model;
let StudentSceme = require('./app/models/students').scheme;

app.get('/api/students' , function(req, res) {
    
    Student.find(function(err,students) {
        if(err)
            return res.send(err);
        return res.json(students);
    });

});

app.post('/api/students/add', function (req, res) {
    let student = new Student();

    Object.getOwnPropertyNames(StudentSceme).forEach(e => student[e] = req.body[e]);

    student.save(function(err) {
        if (err)
        {
            console.log(err);
            return res.send(err);
        }
        return res.json({ message: 'student created!' });
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


app.put('/api/students/:id', function (req, res) {
    let record = {};
    Object.getOwnPropertyNames(StudentSceme).forEach(e => record[e] = req.body[e]);
    Student.updateOne({
        _id: req.params.id
    },record, function(err, bear) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully updated' });
    });
});

let angular_info = require('./routing');



///
   
let Group = require('./app/models/group').model;
let GroupSceme = require('./app/models/group').scheme;

app.get('/api/groups' , function(req, res) {
    Group.find(function(err,groups) {
        if(err)
            res.send(err);
        res.json(groups);
    });

});

app.post('/api/groups/add', function (req, res) {
    let group = new Group();
    
    Object.getOwnPropertyNames(GroupSceme).forEach(e => group[e] = req.body[e]);
    group.save(function(err) {
        if (err)
            return res.send(err);
        
        return res.json({ message: 'group created!' });
    });
});


app.delete('/api/groups/:id', function (req, res) {
    Group.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
});


app.put('/api/groups/:id', function (req, res) {
    let record = {};
    Object.getOwnPropertyNames(GroupSceme).forEach(e => record[e] = req.body[e]);
    Group.updateOne({
        _id: req.params.id
    },record, function(err, bear) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully updated' });
    });
});


app.get('*',function(req,res){  

    if (angular_info.url.includes(req.url))
        res.sendFile(path.join(__dirname, 'public/index.html'));
    else
        res.sendFile(path.join(__dirname, `public${req.url}`));

 });