const express = require("express");
const mongoose = require("mongoose");
const router  = require("./router/userRouter");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/auth", router);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT,()=>console.log(`server running at port ${PORT}`))
  })
  .catch((err) => {
    console.log(err);
    throw err;
    
  });

