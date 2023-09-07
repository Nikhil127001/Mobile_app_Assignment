const products = require('../Models/Products');

const createProduct = async(req,res,next) =>{
    const {name,price,description, merchant,discountType,category,offerName} = req.body;

    try{
        const product = await products.create({name,price,description,merchant,discountType,category,offerName});

        await product.save()

        res.json({
            message : 'created successfully',
        })
    }catch(err){
        next(err);
    }
}

const getProducts = async(req,res,next) =>{
    try{
        const Products = await products.find();

        res.json({
            message : 'fetched successfully',
            products : Products
        })
    }catch(err){
        next(err);
    }
}

module.exports = {createProduct,getProducts};