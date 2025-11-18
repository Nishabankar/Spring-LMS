import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    duration: "",
    level: "Beginner",
    author: "",
    images: [],
    chapters: [],
  });

  const [loading, setLoading] = useState(false);

  // CLOUDINARY IMAGE UPLOAD
  const handleImageUpload = async (e) => {
    const files = e.target.files;

    if (files.length + courseData.images.length > 3) {
      alert("Maximum 3 images allowed");
      return;
    }

    setLoading(true);

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "spring-lms");

      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/db2g3c5w6/image/upload`,
        formData
      );

      setCourseData((prev) => ({
        ...prev,
        images: [...prev.images, uploadRes.data.secure_url],
      }));
    }

    setLoading(false);
  };

  // REMOVE IMAGE
  const removeImage = (index) => {
    const newImgs = courseData.images.filter((_, i) => i !== index);
    setCourseData({ ...courseData, images: newImgs });
  };

  // ADD CHAPTER
  const addChapter = () => {
    setCourseData({
      ...courseData,
      chapters: [...courseData.chapters, { title: "", lessons: [] }],
    });
  };

  // REMOVE CHAPTER
  const removeChapter = (index) => {
    const updated = courseData.chapters.filter((_, i) => i !== index);
    setCourseData({ ...courseData, chapters: updated });
  };

  // CHAPTER TITLE CHANGE
  const handleChapterChange = (i, value) => {
    const updated = [...courseData.chapters];
    updated[i].title = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  // ADD LESSON
  const addLesson = (chapterIndex) => {
    const updated = [...courseData.chapters];
    updated[chapterIndex].lessons.push({ title: "", duration: "" });
    setCourseData({ ...courseData, chapters: updated });
  };

  // REMOVE LESSON
  const removeLesson = (chapterIndex, lessonIndex) => {
    const updated = [...courseData.chapters];
    updated[chapterIndex].lessons = updated[chapterIndex].lessons.filter(
      (_, i) => i !== lessonIndex
    );
    setCourseData({ ...courseData, chapters: updated });
  };

  // LESSON CHANGE
  const handleLessonChange = (cIndex, lIndex, field, value) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons[lIndex][field] = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  // MAIN INPUT HANDLER
  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (courseData.images.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/courses",
        courseData
      );

      // ⭐ Redirect to Courses Page
     navigate("/dashboard/my-courses");

    } catch (err) {
      console.log(err);
      alert("Error creating course!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block font-semibold">Course Title</label>
          <input
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block font-semibold">Duration</label>
          <input
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Level */}
        <div>
          <label className="block font-semibold">Level</label>
          <select
            name="level"
            value={courseData.level}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label className="block font-semibold">Author</label>
          <input
            name="author"
            value={courseData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* IMAGES */}
        <div>
          <label className="block font-semibold">Upload Images (Max 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mb-3"
          />

          <div className="flex space-x-4">
            {courseData.images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  className="w-24 h-24 object-cover rounded"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white px-1 text-xs rounded"
                  onClick={() => removeImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CHAPTERS */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Chapters</h2>

          {courseData.chapters.map((chapter, cIndex) => (
            <div key={cIndex} className="border p-4 rounded mb-4 bg-gray-50">

              <div className="flex justify-between">
                <h3 className="font-semibold">Chapter {cIndex + 1}</h3>

                <button
                  type="button"
                  className="text-red-600"
                  onClick={() => removeChapter(cIndex)}
                >
                  Remove Chapter
                </button>
              </div>

              <input
                placeholder="Chapter Title"
                value={chapter.title}
                onChange={(e) => handleChapterChange(cIndex, e.target.value)}
                className="w-full mt-2 p-2 border rounded"
              />

              {/* Lessons */}
              <div className="mt-3">
                <h4 className="font-semibold">Lessons</h4>

                {chapter.lessons.map((lesson, lIndex) => (
                  <div key={lIndex} className="ml-4 mt-2 p-3 border rounded bg-white">

                    <div className="flex justify-between">
                      <label>Lesson {lIndex + 1}</label>
                      <button
                        type="button"
                        className="text-red-600 text-sm"
                        onClick={() => removeLesson(cIndex, lIndex)}
                      >
                        Remove Lesson
                      </button>
                    </div>

                    <input
                      placeholder="Lesson Title"
                      value={lesson.title}
                      onChange={(e) =>
                        handleLessonChange(cIndex, lIndex, "title", e.target.value)
                      }
                      className="w-full mt-2 p-2 border rounded"
                    />

                    <input
                      placeholder="Lesson Duration"
                      value={lesson.duration}
                      onChange={(e) =>
                        handleLessonChange(cIndex, lIndex, "duration", e.target.value)
                      }
                      className="w-full mt-2 p-2 border rounded"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addLesson(cIndex)}
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                >
                  + Add Lesson
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addChapter}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            + Add Chapter
          </button>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded mt-6"
          disabled={loading}
        >
          {loading ? "Saving..." : "Create Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
