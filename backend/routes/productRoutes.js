const express = require('express');
const router = express.Router();

const {getProducts, getProductById} = require('../controller/productControllers');

{/*GET products from DB*/}
{/*GET products /api/products*/}
{/*Public access*/}
router.get('/', getProducts) 

{/*GET a product from DB*/}
{/*GET products /api/products/:id*/}
{/*Public access*/}
router.get('/:id', getProductById) 

module.exports = router;