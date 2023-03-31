import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const port = 4000;
const app = express();
app.use(cors);

// mongoose
//   .connect(
//     "mongodb+srv://sachin:sachin@sachin.dsbcoyf.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("mongodb conn is success"))
//   .catch((err) => console.log(err));
await mongoose.connect(
  "mongodb+srv://sachin:sachin@sachin.dsbcoyf.mongodb.net/?retryWrites=true&w=majority"
);
console.log("mongodb conn is success");
app.get("/", (req, res) => {
  res.send("I m here");
});
app.listen(port, () => {
  console.log("port is suscessfully run ");
});
