// app.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./src/routes/index.js";
import { corsOptions } from "./src/config/cors.config.js";


const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use("/", routes);

export default app;
