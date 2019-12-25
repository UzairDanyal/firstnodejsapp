const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/firstmongodbapp', { useNewUrlParser: true, useUnifiedTopology: true });
const Student = mongoose.model('Student', {
    name: String,
    student_id: Number,
    email: String,
    password: String,
    date_added: Date
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.post('/signup', async (req, res) => {
    const body = req.body;
    console.log('req.body', body)
    try {
        const student = new Student(body);

        const result = await student.save();
        res.send({
            message: 'Student signup successful'
        });

    }
    catch (ex) {
        console.log('ex', ex);
        res.send({ message: 'Error' }).status(401);
    }
});

app.get('/students', async (req, res) => {

    const allStudents = await Student.find();
    console.log('allStudents', allStudents);

    res.send(allStudents);
});

app.listen(3000, () => {
    console.log('Express application running on localhost:3000');
});