import express from "express";
import {
    getBenefits,
  getBenefitById,
  createBenefit,
  updateBenefit,
  deleteBenefit
} from "../controllers/benefitController.js";

const router = express.Router();

// Trim id param for every route that includes :id
router.param("id", (req, res, next, id) => {
  if (typeof id === "string") {
    req.params.id = id.replace(/\s+/g, "").replace(/%0A/g, "").trim();
  }
  next();
});


router.get( "/", getBenefits );
router.get("/:id", getBenefitById);
router.post("/", createBenefit);
router.put("/:id", updateBenefit);
router.delete("/:id", deleteBenefit);

export default router;
