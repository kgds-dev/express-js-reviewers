const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(process.env.MONGO_URL);
    
    app.listen(PORT, () => {
        console.log(`Server is listening to http://localhost:${PORT}`);
    });
}

startServer();

