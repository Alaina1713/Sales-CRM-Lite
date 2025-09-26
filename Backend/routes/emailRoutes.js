import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { sendEmailController, getEmailsController } from "../controllers/emailController.js";

const router = express.Router();

router.route("/").get(protect, getEmailsController).post(protect, sendEmailController);

export default router;
