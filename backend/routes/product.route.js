import express from "express";
import { createProduct, getProducts, updateProduct , deleteProduct} from "../controllers/product.controller.js";

const router = express.Router();

//create a route, req,res are controller functions thus creating a database
router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id",updateProduct );

router.delete("/:id",deleteProduct );



export default router;