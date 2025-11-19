import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  available: {
    type: Boolean,
    required: true,
  },
  feature: {
    type: String,
    required: true,
  },
});

const pricingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    planType: {
      type: String,
      enum: ["monthly", "yearly"],
      required: true,
    },
    features: [featureSchema],
  },
  { timestamps: true }
);

const Pricing = mongoose.model("Pricing", pricingSchema);

export default Pricing;
