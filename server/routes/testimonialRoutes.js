import express from "express";
import {
  addTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

// GET all
router.get("/", getTestimonials);

// GET by ID
router.get("/:id", getTestimonialById);

// POST create
router.post("/", addTestimonial);

// PUT update
router.put("/:id", updateTestimonial);

// DELETE remove
router.delete("/:id", deleteTestimonial);

export default router;
