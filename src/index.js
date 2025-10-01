// require('dotenv').config({path: './env'})

import connectDb from "./db/index.js";

import dotenv from "dotenv"

dotenv.config();

connectDb();



/*
import express from 'express';
const app= express();

(async () => {
  
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error) => {
      console.error("Error occureed at app")
      throw error;
    })

    app.listen(process.env.PORT, () => {
      console.log(`app is listening at port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log("ERROR", error)
    throw error
  }

})()
*/