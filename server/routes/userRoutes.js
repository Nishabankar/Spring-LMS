import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import validateUserData from "../middleware/validateUserData.js";

const router = express.Router();

// Applying middleware before controller
router.post("/register", validateUserData, createUser);
router.post("/login", validateUserData, loginUser);

export default router;
