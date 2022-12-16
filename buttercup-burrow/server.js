import express from 'express';
import {data} from './data.js';
require('dotenv').config();

// const express = require('express');

// Configuration
const app = express();

// Routes
app.get('/api/items', (req, res) => {
    res.send(data.items);
});

// Listen
const PORT = process.env.PORT || 5003;
app.listen(PORT.log(`Server listening on port http://localhost:${PORT}`)
);
