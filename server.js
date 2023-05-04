const express = require('express');

// routes
const userRouter = require('./routes/users.router');

const app = express();
const PORT = 3000;

// Register a middleware function that parses incoming JSON payloads/request
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/greeting', (req, res) => {
    const name = req.body.name;
    const greeting = `Hello Master ${name}`;
    res.send(greeting);
});

app.use('/users', userRouter);

// http://localhost:3000/change-password (HTTP PUT METHOD)



app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});