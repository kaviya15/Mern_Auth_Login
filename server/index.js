const express = require("express");
const mongoose = require("mongoose");
const userRouter  = require("./router/userRouter");
const commentRouter = require("./router/commentRoute");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser());
app.use("/auth", userRouter);
app.use("/comment",commentRouter);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT,()=>console.log(`server running at port ${PORT}`))
  })
  .catch((err) => {
    console.log(err);
    throw err;
    
  });

