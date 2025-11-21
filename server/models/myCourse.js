import mongoose from "mongoose";

const myCourseSchema = new mongoose.Schema({
  userId: {
    type: String,   // Clerk / Firebase / Auth user ID
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("MyCourse", myCourseSchema);
