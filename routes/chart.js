import express from "express";
import { getAllData } from "../controllers/Chart.js";

const router=express.Router();

router.get('/getAllData', getAllData);

export default router;