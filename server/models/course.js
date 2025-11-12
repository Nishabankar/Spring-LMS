import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  lessonId: {
    type: String,
    required: true,
  },
  lessonTitle: {
    type: String,
    required: true,
  },
  lessonDuration: {
    type: String,
    required: true,
  },
});

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lessons: [lessonSchema],
});

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: [arr => arr.length <= 3, "Maximum 3 images allowed"],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    author: {
      type: String,
      required: true,
    },
    chapters: [chapterSchema],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
