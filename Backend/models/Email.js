import mongoose from "mongoose";

const emailSchema = mongoose.Schema(
  {
    to: { type: String, required: true },
    subject: { type: String },
    body: { type: String },
    status: { type: String, enum: ["sent", "opened", "replied"], default: "sent" },
    sentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", emailSchema);
export default Email;
