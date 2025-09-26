import mongoose from "mongoose";

const leadSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    company: { type: String },
    status: { type: String, enum: ["New", "Contacted", "Won", "Lost"], default: "New" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
export default Lead;
