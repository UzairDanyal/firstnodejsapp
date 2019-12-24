const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('hello world');
  });
  app.get('/students', (req, res) => { 
    res.send('Hello students');
  });

app.listen(3000, () => {
  console.log('Express application running on localhost:3000');
});