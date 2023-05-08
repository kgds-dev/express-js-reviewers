const express = require('express');

// routes
const userRouter = require('./routes/users.router');
const productsRouter = require('./routes/products.router');


const app = express();
const PORT = 3000;

// Register a middleware function that parses incoming JSON payloads/request
app.use(express.json());

// middleware logger
app.use((req, res, next) => {
    const start = Date.now();
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');  
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/greeting', (req, res) => {
    const name = req.body.name;
    const greeting = `Hello Master ${name}`;
    res.send(greeting);
});

app.use('/users', userRouter);
app.use('/products', productsRouter);

// http://localhost:3000/change-password (HTTP PUT METHOD)



app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});