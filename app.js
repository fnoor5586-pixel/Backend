import express from "express";
import pool from "./db.js";
import userRoutes from "./routes/userroutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.listen(5000, () => {
    console.log("server is running on port 5000")
})