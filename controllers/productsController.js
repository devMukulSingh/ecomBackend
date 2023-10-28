import productModel from "../models/productModel.js";

export const getProductsController = async( req,res) => {
  try {
      const products = await productModel.find({});
      res.json(products);
  } catch (error) {
        res.json(`Error in getProductsController ${error}`);
  }
}

export const getProductDetailsController = async(req,res) => {
   try {
     const product = await productModel.findOne( { 'id': req.params.id});
     res.status(200).json(product);
     
   } catch (error) {
      res.status(500).json(`Error in getProductDetailsController ${error}`);
   }
}