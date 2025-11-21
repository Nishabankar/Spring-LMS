import MyCourse from "../models/myCourse.js";

// Add a course to user's list
export const addMyCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    // prevent duplicate enrollment
    const exists = await MyCourse.findOne({ userId, courseId });

    if (exists) {
      return res.status(400).json({ message: "Already added to My Courses" });
    }

    const entry = await MyCourse.create({ userId, courseId });
    res.status(201).json(entry);

  } catch (error) {
    res.status(500).json({ message: "Error adding course", error });
  }
};


// Get all courses for a user
export const getMyCourses = async (req, res) => {
  try {
    const courses = await MyCourse
      .find({ userId: req.params.userId })
      .populate("courseId");

    res.json(courses);

  } catch (error) {
    res.status(500).json({ message: "Error fetching user courses", error });
  }
};
