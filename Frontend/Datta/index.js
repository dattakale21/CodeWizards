

const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'datta@2003',
  database: 'stu',
  port: 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database');
    return;
  }
  console.log('Connected ');

});

connection.query("select *from info",(err,result)=>{
  console.log("result",result);
})


const express = require('express');

const app = express();



app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO info (name, email, password) VALUES (?, ?, ?)';

    connection.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Registration failed' });
        }
        return res.status(201).json({ message: 'Registration successful' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});