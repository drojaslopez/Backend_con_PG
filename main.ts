import express from "express";
import dotenv from "dotenv";

import userRoute from "./src/module/user/route";


dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = process.env.API

const user = "/user";
const pathUser =  api+user;

app.use(pathUser, userRoute);

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
