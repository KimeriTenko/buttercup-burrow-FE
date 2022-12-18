require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

connectDB();

mongoose.connect('mongodb+srv://KimeriTengu:Tenkochan1!@buttercup-burrow.sk3sn81.mongodb.net/buttercup-burrow?retryWrites=true&w=majority')

// Configuration
const app = express();

// Add this line to get rid of the first error I got
mongoose.set("strictQuery", true);

// Routes
app.get('/api/items', (req, res) => {
    res.send(data.items);
});

app.use(express.json());

app.use("/api/products", productRoutes);

// Listen
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));

