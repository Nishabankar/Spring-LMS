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

  const removeImage = (index) => {
    const updated = courseData.images.filter((_, i) => i !== index);
    setCourseData({ ...courseData, images: updated });
  };

  const addChapter = () => {
    setCourseData({
      ...courseData,
      chapters: [...courseData.chapters, { title: "", lessons: [] }],
    });
  };

  const removeChapter = (index) => {
    const updated = courseData.chapters.filter((_, i) => i !== index);
    setCourseData({ ...courseData, chapters: updated });
  };

  const handleChapterChange = (i, value) => {
    const updated = [...courseData.chapters];
    updated[i].title = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  const addLesson = (chapterIndex) => {
    const updated = [...courseData.chapters];
    updated[chapterIndex].lessons.push({ title: "", duration: "" });
    setCourseData({ ...courseData, chapters: updated });
  };

  const removeLesson = (cIndex, lIndex) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons = updated[cIndex].lessons.filter((_, i) => i !== lIndex);
    setCourseData({ ...courseData, chapters: updated });
  };

  const handleLessonChange = (cIndex, lIndex, field, value) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons[lIndex][field] = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseData.images.length) {
      alert("Please upload at least one image");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/courses", courseData);
      navigate("/dashboard/my-courses");
    } catch (err) {
      console.log(err);
      alert("Error creating course!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">Add New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Title */}
        <div>
          <label className="font-semibold text-gray-700">Course Title</label>
          <input
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none mt-1"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            rows="4"
            value={courseData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none mt-1"
            required
          ></textarea>
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold text-gray-700">Duration</label>
          <input
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none mt-1"
            required
          />
        </div>

        {/* Level */}
        <div>
          <label className="font-semibold text-gray-700">Level</label>
          <select
            name="level"
            value={courseData.level}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none mt-1"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label className="font-semibold text-gray-700">Author</label>
          <input
            name="author"
            value={courseData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none mt-1"
            required
          />
        </div>

        {/* Images */}
        <div>
          <label className="font-semibold text-gray-700">Upload Images (Max 3)</label>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mt-2"
          />

          <div className="flex gap-4 mt-4">
            {courseData.images.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} className="w-24 h-24 object-cover rounded-lg shadow" />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded"
                  onClick={() => removeImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Chapters */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-800">Chapters</h2>

          {courseData.chapters.map((ch, cIndex) => (
            <div key={cIndex} className="bg-gray-50 border rounded-xl p-5 mb-5 shadow-inner">

              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Chapter {cIndex + 1}</h3>
                <button
                  type="button"
                  className="text-red-600 font-medium"
                  onClick={() => removeChapter(cIndex)}
                >
                  Remove Chapter
                </button>
              </div>

              <input
                placeholder="Chapter Title"
                value={ch.title}
                onChange={(e) => handleChapterChange(cIndex, e.target.value)}
                className="w-full p-3 border rounded-lg mt-3"
              />

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Lessons</h4>

                {ch.lessons.map((lesson, lIndex) => (
                  <div key={lIndex} className="bg-white border rounded-lg p-4 mt-3 shadow-sm">
                    <div className="flex justify-between">
                      <p className="font-medium">Lesson {lIndex + 1}</p>
                      <button
                        type="button"
                        onClick={() => removeLesson(cIndex, lIndex)}
                        className="text-red-600 text-sm"
                      >
                        Remove
                      </button>
                    </div>

                    <input
                      placeholder="Lesson Title"
                      value={lesson.title}
                      onChange={(e) =>
                        handleLessonChange(cIndex, lIndex, "title", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-2"
                    />

                    <input
                      placeholder="Lesson Duration"
                      value={lesson.duration}
                      onChange={(e) =>
                        handleLessonChange(cIndex, lIndex, "duration", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-2"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addLesson(cIndex)}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
                >
                  + Add Lesson
                </button>
              </div>

            </div>
          ))}

          <button
            type="button"
            onClick={addChapter}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow"
          >
            + Add Chapter
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-xl shadow text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          {loading ? "Saving..." : "Create Course"}
        </button>

      </form>
    </div>
  );
};

export default AddCourse;
