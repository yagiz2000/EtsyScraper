const Product = require("../Models/Product");
const scrapeProduct = require("../Helpers/Scraper");

module.exports.addProduct = async (req,res,next)=>{
    let productId = req.body.url.split("/")[5];
    try{
        let {pureTitle,pureProductImg,purePrice}= await scrapeProduct(req.body.url);
        let product = new Product({
            productId,productName:pureTitle,productImage:pureProductImg,productPrice:purePrice
        })
        await product.save();
        res.status(200).json({msg:"Success"});
    }
    catch(err){
        return next(err);
    }
}
module.exports.listProducts = async (req,res)=>{
    try{
        let list = await Product.find();
        res.status(200).json(list);
    }
    catch(err){
        res.status(400).json(err);
    }
}
module.exports.getProduct = async (req,res)=>{
    try{
        let product = await Product.find({productId:req.body.id});
        res.status(200).send(product);
    }
    catch(err){
        console.log(err);
    }
}