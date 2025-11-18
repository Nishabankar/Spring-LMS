import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    description: { type: String, required: true },
    user_image: { type: String, default: "" }, // image URL
    role: { type: String, default: "" },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

export default Testimonial;
