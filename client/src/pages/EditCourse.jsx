import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // FETCH COURSE
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

  if (loading || !courseData) return <p className="p-6">Loading...</p>;

  // CHANGE MAIN INPUTS
  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  // IMAGE UPLOAD
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

  // DELETE IMAGE
  const removeImage = (index) => {
    const updated = courseData.images.filter((_, i) => i !== index);
    setCourseData({ ...courseData, images: updated });
  };

  // CHAPTER FUNCTIONS
  const addChapter = () => {
    setCourseData({
      ...courseData,
      chapters: [...courseData.chapters, { title: "", lessons: [] }],
    });
  };

  const handleChapterChange = (i, value) => {
    const updated = [...courseData.chapters];
    updated[i].title = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  const removeChapter = (i) => {
    const updated = courseData.chapters.filter((_, idx) => idx !== i);
    setCourseData({ ...courseData, chapters: updated });
  };

  // LESSON FUNCTIONS
  const addLesson = (chapterIndex) => {
    const updated = [...courseData.chapters];
    updated[chapterIndex].lessons.push({ title: "", duration: "" });
    setCourseData({ ...courseData, chapters: updated });
  };

  const handleLessonChange = (cIndex, lIndex, field, value) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons[lIndex][field] = value;
    setCourseData({ ...courseData, chapters: updated });
  };

  const removeLesson = (cIndex, lIndex) => {
    const updated = [...courseData.chapters];
    updated[cIndex].lessons = updated[cIndex].lessons.filter(
      (_, i) => i !== lIndex
    );
    setCourseData({ ...courseData, chapters: updated });
  };

  // SUBMIT UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await axios.put(
        `http://localhost:5000/api/courses/${id}`,
        courseData
      );

      alert("Course updated successfully!");
      navigate("/my-courses");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating course!");
    }

    setSaving(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Course</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="font-semibold">Course Title</label>
          <input
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold">Duration</label>
          <input
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Level */}
        <div>
          <label className="font-semibold">Level</label>
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
          <label className="font-semibold">Author</label>
          <input
            name="author"
            value={courseData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* IMAGES */}
        <div>
          <label className="font-semibold">Course Images (Max 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />

          <div className="flex gap-4 mt-3">
            {courseData.images.map((img, i) => (
              <div key={i} className="relative">
                <img src={img} className="w-24 h-24 rounded object-cover" />
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white px-1 text-xs"
                  onClick={() => removeImage(i)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CHAPTERS */}
        <div>
          <h2 className="text-xl font-semibold">Chapters</h2>

          {courseData.chapters.map((chapter, cIndex) => (
            <div
              key={cIndex}
              className="border rounded p-4 bg-gray-50 mt-3"
            >
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
                value={chapter.title}
                onChange={(e) =>
                  handleChapterChange(cIndex, e.target.value)
                }
                className="w-full p-2 border rounded mt-2"
                placeholder="Chapter Title"
              />

              {/* LESSONS */}
              <div className="mt-3">
                <h4 className="font-medium">Lessons</h4>

                {chapter.lessons.map((lesson, lIndex) => (
                  <div
                    key={lIndex}
                    className="p-3 bg-white border rounded mt-2"
                  >
                    <div className="flex justify-between">
                      <span>Lesson {lIndex + 1}</span>
                      <button
                        type="button"
                        className="text-red-600 text-sm"
                        onClick={() =>
                          removeLesson(cIndex, lIndex)
                        }
                      >
                        Remove
                      </button>
                    </div>

                    <input
                      value={lesson.title}
                      onChange={(e) =>
                        handleLessonChange(
                          cIndex,
                          lIndex,
                          "title",
                          e.target.value
                        )
                      }
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Lesson Title"
                    />

                    <input
                      value={lesson.duration}
                      onChange={(e) =>
                        handleLessonChange(
                          cIndex,
                          lIndex,
                          "duration",
                          e.target.value
                        )
                      }
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Lesson Duration"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addLesson(cIndex)}
                  className="px-3 py-1 bg-blue-500 text-white rounded mt-2"
                >
                  + Add Lesson
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addChapter}
            className="px-4 py-2 bg-green-600 text-white rounded mt-3"
          >
            + Add Chapter
          </button>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={saving}
          className="w-full py-3 bg-blue-600 text-white rounded"
        >
          {saving ? "Updating..." : "Update Course"}
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
