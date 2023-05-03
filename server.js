const express = require('express');

const app = express();
const PORT = 3000;

// Register a middleware function that parses incoming JSON payloads/request
app.use(express.json());

const users = []; // dummy data from database.

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/greeting', (req, res) => {
    const name = req.body.name;
    const greeting = `Hello Master ${name}`;
    res.send(greeting);
});

app.post('/signup', (req, res) => {
    // destructured the body from the request
    const { username, password } = req.body;

    // error handler if fields are empty or invalid
    if (!username || !password) {
       return res.status(400).json({
            error: 'Please fill out the complete information.'
       });
    }

    users.push({ username, password });
    res.send(`User ${username} successfully registered!`);
});

app.get('/getUsers', (req, res) => {
    res.status(200).json(users);
});

app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});