import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    icon_path: { type: String, default: "assets/icons/plus-icon.svg" },
    buttonText: { type: String },
    link: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("FAQ", faqSchema);
