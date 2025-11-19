import React, { useEffect, useState } from "react";
import axios from "axios";

const EditCourse = ({ id, onUpdated }) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourseData(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };
    fetchCourse();
  }, [id]);

  if (loading || !courseData)
    return <p className="p-6 text-lg text-center font-semibold">Loading...</p>;

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (files.length + courseData.images.length > 3) {
      alert("Max 3 images allowed!");
      return;
    }

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "spring-lms");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/db2g3c5w6/image/upload",
        formData
      );

      setCourseData({
        ...courseData,
        images: [...courseData.images, res.data.secure_url],
      });
    }
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
    setCourseData({
      ...courseData,
      chapters: courseData.chapters.filter((_, i) => i !== index),
    });
  };

  const handleChapterChange = (index, value) => {
    const updated = [...courseData.chapters];
    updated[index].title = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  const addLesson = (cIndex) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons.push({ title: "", duration: "" });
    setCourseData({ ...courseData, chapters: updated });
  };

  const removeLesson = (cIndex, lIndex) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons = updated[cIndex].lessons.filter(
      (_, i) => i !== lIndex
    );
    setCourseData({ ...courseData, chapters: updated });
  };

  const handleLessonChange = (cIndex, lIndex, field, val) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons[lIndex][field] = val;
    setCourseData({ ...courseData, chapters: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await axios.put(
        `http://localhost:5000/api/courses/${id}`,
        courseData
      );

      alert("Course updated successfully!");
      if (onUpdated) onUpdated();
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    }

    setSaving(false);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

      <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-wide">
        Edit Course
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Title */}
        <div>
          <label className="font-semibold">Course Title</label>
          <input
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            rows="4"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
          ></textarea>
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold">Duration</label>
          <input
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>

        {/* Level */}
        <div>
          <label className="font-semibold">Level</label>
          <select
            name="level"
            value={courseData.level}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 bg-white"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label className="font-semibold">Author</label>
          <input
            name="author"
            value={courseData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>

        {/* Images */}
        <div>
          <label className="font-semibold">Course Images (Max 3)</label>

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
                <img
                  src={img}
                  className="w-24 h-24 object-cover rounded-lg shadow"
                />
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
          <h2 className="text-xl font-bold text-gray-800">Chapters</h2>

          {courseData.chapters.map((ch, cIndex) => (
            <div key={cIndex} className="bg-gray-50 border rounded-xl p-5 mt-4 shadow-inner">

              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Chapter {cIndex + 1}</h3>
                <button
                  type="button"
                  className="text-red-600 font-medium"
                  onClick={() => removeChapter(cIndex)}
                >
                  Remove
                </button>
              </div>

              <input
                value={ch.title}
                onChange={(e) => handleChapterChange(cIndex, e.target.value)}
                placeholder="Chapter Title"
                className="w-full p-3 border rounded-lg mt-3"
              />

              {/* LESSONS */}
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Lessons</h4>

                {ch.lessons.map((lesson, lIndex) => (
                  <div key={lIndex} className="bg-white p-4 border rounded-lg mt-3 shadow-sm">

                    <div className="flex justify-between">
                      <p className="font-medium">Lesson {lIndex + 1}</p>
                      <button
                        type="button"
                        className="text-red-600 text-sm"
                        onClick={() => removeLesson(cIndex, lIndex)}
                      >
                        Remove
                      </button>
                    </div>

                    <input
                      value={lesson.title}
                      onChange={(e) =>
                        handleLessonChange(cIndex, lIndex, "title", e.target.value)
                      }
                      placeholder="Lesson Title"
                      className="w-full p-2 border rounded mt-3"
                    />

                    <input
                      value={lesson.duration}
                      onChange={(e) =>
                        handleLessonChange(cIndex, lIndex, "duration", e.target.value)
                      }
                      placeholder="Lesson Duration"
                      className="w-full p-2 border rounded mt-3"
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
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow mt-4"
          >
            + Add Chapter
          </button>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={saving}
          className="w-full py-3 bg-blue-600 text-white rounded-xl shadow text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          {saving ? "Updating..." : "Update Course"}
        </button>

      </form>
    </div>
  );
};

export default EditCourse;
