// Middleware?
import express from "express";
import getRouter from "./routes/getRouter.js";
// import "./dbConfig/config.js";
import dotenv from "dotenv";
dotenv.config();
import { sequelize } from "./dbConfig/sequlizeConfig.js";
import "./model/product.js";

const app = express();
const port = process.env.PORT || 4500;

// console.log(process.argv);

//MVC architecture {models, views and controllers}
app.use(express.json());
app.use(getRouter);

// app.get("/", getController);

app.post("/:id", (req, res) => {
  const data = req.body;
  // const params = req.params;
  // console.log(data);
  // console.log(params);

  res.json({
    msg: "your data has been accepted !",
    data: data,
  });
});
// req --> this is the request from our client
// res --> this is the response from our server

sequelize
  .sync()
  .then((result) => {})
  .catch((err) => console.log(err));

// starting the server
app.listen(port, () => {
  // console.log("server listening on port: " + port);
  console.log(`Server listening on port: http://localhost:${port}`);
});
