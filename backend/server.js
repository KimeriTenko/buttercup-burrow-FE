require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

connectDB();
// const productRoutes = require('./routes/productRoutes');


// Configuration
const app = express();

app.use(express.json());

// Routes
app.get('/api/items', (req, res) => {
    res.send(data.items);
});

// Listen
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));

