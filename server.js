const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

// mongodb+srv://{USER_NAME}:{PASSWORD}@cluster0.9kf28c1.mongodb.net/{DATABASE_NAME}?retryWrites=true&w=majority
const MONGO_URL = 'mongodb+srv://test-user:root123@cluster0.9kf28c1.mongodb.net/kodegoMongo?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    
    app.listen(PORT, () => {
        console.log(`Server is listening to http://localhost:${PORT}`);
    });
}

startServer();

