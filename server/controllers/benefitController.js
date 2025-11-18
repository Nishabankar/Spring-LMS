import Benefit from "../models/Benefit.js";

// CREATE
export const createBenefit = async (req, res) => {
  try {
    const benefit = new Benefit(req.body);
    await benefit.save();
    res.status(201).json(benefit);
  } catch (err) {
    res.status(400).json({ message: "Error creating benefit", error: err });
  }
};

// GET ALL
export const getBenefits = async (req, res) => {
  try {
    const benefits = await Benefit.find().sort({ order: 1 });
    res.json(benefits);
  } catch (err) {
    res.status(500).json({ message: "Error fetching benefits", error: err });
  }
};

// GET ONE BENEFIT BY ID

export const getBenefitById = async (req, res) => {
  try {
    const id = req.params.id.trim(); // remove \n or spaces

    const benefit = await Benefit.findById(id);

    if (!benefit) {
      return res.status(404).json({ message: "Benefit not found" });
    }

    res.status(200).json(benefit);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching benefit by ID",
      error: error.message,
    });
  }
};

// UPDATE
export const updateBenefit = async (req, res) => {
  try {
    const id = (req.params.id || "").trim();
    const updated = await Benefit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Error updating benefit", error: err });
  }
};

// DELETE
export const deleteBenefit = async (req, res) => {
  try {
    const id = (req.params.id || "").trim();
    await Benefit.findByIdAndDelete(req.params.id);
    res.json({ message: "Benefit deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting benefit", error: err });
  }
};
