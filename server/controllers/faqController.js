import FAQ from "../models/faqModel.js";

// CREATE FAQ
export const createFAQ = async (req, res) => {
  try {
    const faq = await FAQ.create(req.body);
    res.status(201).json({ message: "FAQ created", faq });
  } catch (err) {
    res.status(400).json({ message: "Failed to create FAQ", error: err.message });
  }
};

// GET ALL FAQ
export const getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
};

// GET FAQ BY ID
export const getFAQById = async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: "Error fetching FAQ" });
  }
};

// UPDATE FAQ
export const updateFAQ = async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "FAQ updated", faq });
  } catch (err) {
    res.status(400).json({ message: "Failed to update FAQ" });
  }
};

// DELETE FAQ
export const deleteFAQ = async (req, res) => {
  try {
    await FAQ.findByIdAndDelete(req.params.id);
    res.json({ message: "FAQ deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete FAQ" });
  }
};
