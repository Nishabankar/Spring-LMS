import express from "express";
import { addMyCourse, getMyCourses } from "../controllers/myCourseController.js";

const router = express.Router();

router.post("/", addMyCourse);           // save course
router.get("/:userId", getMyCourses);    // fetch saved courses

export default router;
