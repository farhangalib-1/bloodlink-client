
"use client";

import { useState } from "react";

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Blog Data:", formData);

    // Later:
    // fetch("/api/blogs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Blog Dashboard
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Create New Blog
          </h1>

          <p className="mt-2 text-gray-500">
            Create and publish a new blog post.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >

          {/* Image URL */}
          <div className="mb-7">
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Image URL
            </label>

            <input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste ImageBB image URL..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              Upload the image to ImageBB and paste the returned URL here.
            </p>
          </div>

          {/* Title */}
          <div className="mb-7">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Blog Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your blog title..."
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Details */}
          <div className="mb-8">
            <label
              htmlFor="details"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Blog Details
            </label>

            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={12}
              placeholder="Write your blog content here..."
              required
              className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">

            <button
              type="reset"
              onClick={() =>
                setFormData({
                  title: "",
                  details: "",
                  image: "",
                })
              }
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Clear
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Publish Blog
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

