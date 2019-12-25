const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//mongoose.connect('mongodb+srv://uzair:uzair@cluster0-dfysj.mongodb.net/mydb?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/firstmongodbapp', {useNewUrlParser: true,useUnifiedTopology:true});
const Student = mongoose.model('Student', {
    name: String,
    student_id: Number,
    email: String,
    password: String,
    date_added: Date
   });

// mongoose.connect('mongodb://localhost:27017/firstmongodbapp', {useNewUrlParser: true,useUnifiedTopology:true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/signup', async (req, res) => {
    const body = req.body;
    console.log('req.body', body);
    res.send({
      message: 'Success'
    });
    
      });

app.listen(3000, () => {
    console.log('Express application running on localhost:3000');
});