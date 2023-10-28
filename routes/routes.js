import express from "express";
import { saveUserDataController , authLoginController} from "../controllers/userController.js";
import { getProductsController, getProductDetailsController } from "../controllers/productsController.js";
// import { paymentController } from "../controllers/paymentsController.js";
const router = express.Router();

router.post("/users", saveUserDataController);
router.post("/authenticatelogin",authLoginController);
router.get("/products",getProductsController)
router.get("/product/:id",getProductDetailsController);
// router.post("/payment", paymentController);

export default router;