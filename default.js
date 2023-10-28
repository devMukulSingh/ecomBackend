import productModel from "./models/productModel.js";

import { products } from "./constants/constants.js";

const defaultData = async() => {
    try {
        await productModel.insertMany(products);
    } catch (error) {
        console.log(`Error in default.js ${error}`);
    }
}

export default defaultData;