const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(cookieParser());

// Increase the payload size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Set a request timeout
app.use((req, res, next) => {
    res.setTimeout(80000, () => {
        console.error('Request timed out.');
        res.status(408).json({ message: 'Request Timeout', error: true, success: false });
    });
    next();
});

// API Routes
app.use("/api", router);

// Error-handling middleware
app.use((err, req, res, next) => {
    if (err.type === 'entity.too.large') {
        return res.status(413).json({
            success: false,
            message: 'Payload too large. Please reduce the size of your request.',
        });
    }
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'An unknown error occurred',
        error: true,
    });
});

// Start server and connect to DB
const PORT = process.env.PORT || 8080;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected to DB");
            console.log("Server is running on port " + PORT);
        });
    })
    .catch(err => {
        console.error("Database connection failed:", err.message);
    });
