import express from 'express';
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
});

const app = express();

app.use("/ping", (req, res) => {
    res("Hello world!");
} );

export default app;