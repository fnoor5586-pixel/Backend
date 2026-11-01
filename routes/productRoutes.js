import express from "express"
import getAllProducts from "../controllers/productController.js";

const routes = express.Router();

routes.get("/" , getAllProducts);

export default routes;