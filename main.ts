import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//app.use(pathAuth, authRoute);
//app.use("/api/v1/user", userRoute);


app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
