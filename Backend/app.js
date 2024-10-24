const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const cors = require('cors');
const userRoutes = require('./routes/User')

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
connectDB();

app.use('api/users',userRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});