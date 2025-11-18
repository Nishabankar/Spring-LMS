import Testimonial from "../models/Testimonial.js";

// Create Testimonial
export const addTestimonial = async (req, res) => {
  try {
    const { user_name, description, user_image, role } = req.body;

    const newTestimonial = new Testimonial({
      user_name,
      description,
      user_image,
      role,
    });

    await newTestimonial.save();

    res.status(201).json({
      message: "Testimonial added successfully",
      testimonial: newTestimonial,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding testimonial",
      error: error.message,
    });
  }
};

// Get All Testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.json(testimonials);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching testimonials",
      error: error.message,
    });
  }
};

// Get Testimonial by ID
export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching testimonial",
      error: error.message,
    });
  }
};

// Update Testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({
      message: "Testimonial updated successfully",
      testimonial,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating testimonial",
      error: error.message,
    });
  }
};

// Delete Testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting testimonial",
      error: error.message,
    });
  }
};
