import express from "express";
import { fn } from "../controllers/span.controller.js";

const router = express.Router();
router.get("/test", fn);
export default router;
