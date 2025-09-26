import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import { getLeads, getLeadById, createLead, updateLead, deleteLead } from "../controllers/leadController.js";

const router = express.Router();

router.route("/").get(protect, getLeads).post(protect, createLead);
router.route("/:id").get(protect, getLeadById).put(protect, updateLead).delete(protect, deleteLead);

export default router;
