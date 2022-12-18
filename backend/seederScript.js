require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

// Import Data to Database
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);

    console.log('Data imported');

    process.exit(0);
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
}

importData();
