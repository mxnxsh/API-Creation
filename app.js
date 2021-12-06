import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

/**
 * Importing API
 */
import productRoute from "./routes/product.route.js";
import { PORT } from './config/app.config.js'
import './config/db.config.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/**
 * Routing
 */
app.use("/api/products", productRoute);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.get("/", (req, res) => {
    res.send("Hi from Free-commerce API");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is connected on http://localhost:${PORT}`);
});
