import express from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/jwt.js";

const router = express.Router();
router.post("/:gigId", verifyToken,createOrder);
router.get("/", verifyToken, getOrders);
export default router;
 