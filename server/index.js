import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import databaseConnection from './config/databaseConnection.js';
import router from './routes/route.js';

// Load environment variables
dotenv.config();

const app = express();

// Set up environment variables with defaults
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'your_default_database_url';
const DATABASE_NAME = process.env.DATABASE_NAME || 'your_default_database_name';

// Middleware
app.use(
    cors({
        origin: [
            'http://localhost:5173',
            'https://thinkify.vercel.app',
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// Connect to the database
databaseConnection(DATABASE_URL, DATABASE_NAME);

// API Routes
app.use('/api', router);

// Basic route
app.get('/', (req, res) => {
    res.send('Server Running Successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost:${PORT}`);
});
