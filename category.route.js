import express from "express";
import { categoryList, deletCategory, save, saveInBulk } from "../controller/category.controller.js";
const router = express.Router();
// http://localhost:3000/category/save-in-bulk
router.post("/save-in-bulk",saveInBulk);
router.get("/list",categoryList);
router.delete("/:name",deletCategory);
router.post("/save",save);
export default router;