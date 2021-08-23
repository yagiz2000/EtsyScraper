const express = require('express');
const router = express.Router();
const {addProduct,listProducts,getProduct} = require("../Controllers/product");


router.post("/addProduct",addProduct);
router.get("/listProducts",listProducts);
router.post("/getProduct",getProduct);

module.exports = router;