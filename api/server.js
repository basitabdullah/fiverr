import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

//middlewares
app.use(express.json())
app.use(cookieParser());
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);


app.listen(4000, () => {
  connect();
  console.log("Backend Sever is running..");
});
