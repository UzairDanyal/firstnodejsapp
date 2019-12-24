const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('Welcome to my Node.js app');
  });
  app.get('/students', (req, res) => { 
  
    const listOfStudents = [
      {id: 1,name: 'Ali'},
      {id: 2,name: 'Ahmed'},
      {id: 3,name: 'Danish'},
    ]
  
    res.send(listOfStudents);
  });
  app.get('*', (req, res) => { 
  
  
    res.send('Page Doesnot exists');
  });
  
  app.listen(3000, () => {
    console.log('Express application running on localhost:3000');
  });