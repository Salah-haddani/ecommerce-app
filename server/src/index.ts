import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);

mongoose.connect(
    "mongodb+srv://admin123:admin123@cluster0.ehycu3s.mongodb.net/"
);


app.listen(3001, () => console.log("SERVER STARTED"));