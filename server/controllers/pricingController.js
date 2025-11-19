import Pricing from "../models/pricing.js";

// 👉 Add pricing plan
export const addPricing = async (req, res) => {
  try {
    const pricing = new Pricing(req.body);
    await pricing.save();
    res.status(201).json({
      message: "Pricing plan created successfully",
      pricing,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding pricing", error });
  }
};

// 👉 Get all pricing plans
export const getAllPricing = async (req, res) => {
  try {
    const pricing = await Pricing.find();
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pricing", error });
  }
};

// 👉 Get pricing by id
export const getPricingById = async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pricing", error });
  }
};

// 👉 Update pricing
export const updatePricing = async (req, res) => {
  try {
    const pricing = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Pricing updated", pricing });
  } catch (error) {
    res.status(500).json({ message: "Error updating pricing", error });
  }
};

// 👉 Delete pricing
export const deletePricing = async (req, res) => {
  try {
    await Pricing.findByIdAndDelete(req.params.id);
    res.json({ message: "Pricing deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting pricing", error });
  }
};
