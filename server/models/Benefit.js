import mongoose from "mongoose";

const BenefitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Benefit = mongoose.model("Benefit", BenefitSchema);

export default Benefit;
