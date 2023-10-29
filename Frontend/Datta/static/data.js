const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
 
const app = express();

// Custom middleware to log request information
const requestLogger = (req, res, next) => {
    console.log(`Received ${req.method} request at ${req.url}`);
    next(); // Move to the next middleware or route handler
};

// Assuming you've already set up the database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'datta@2003',
    database: 'stu',
    port: 3306,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add the requestLogger middleware to be used for all routes
app.use(requestLogger);

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Assuming 'info' is your table name
    const query = 'INSERT INTO info (name, email, password) VALUES (?, ?, ?)';

    connection.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Signup failed' });
        }
        return res.status(201).json({ message: 'Signup successful' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
