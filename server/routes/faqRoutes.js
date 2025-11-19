import express from "express";
import {
  createFAQ,
  getFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ
} from "../controllers/faqController.js";

const router = express.Router();

router.post("/", createFAQ); // Add FAQ
router.get("/", getFAQs); // Get all FAQ
router.get("/:id", getFAQById); // Get single FAQ
router.put("/:id", updateFAQ); // Update
router.delete("/:id", deleteFAQ); // Delete

export default router;
