
"use client";

import { useState } from "react";

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);

      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title: formData.title,
      details: formData.details,
      image: image,
    };

    console.log("Blog Data:", blogData);

    /*
      blogData will look like:

      {
        title: "My Blog",
        details: "My blog details...",
        image: File
      }

      Next step:
      1. Upload `image` to ImageBB
      2. Get ImageBB URL
      3. Send title + details + ImageBB URL
         to your backend/MongoDB
    */
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-red-600">
            Blog Dashboard
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create a New Blog
          </h1>

          <p className="mt-2 text-gray-500">
            Share your thoughts, knowledge, and experiences with your readers.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >

          {/* Image Section */}
          <div className="mb-7">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Cover Image
            </label>

            <label
              htmlFor="blog-image"
              className="group flex min-h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-red-500 hover:bg-red-50"
            >

              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Blog preview"
                  className="h-64 w-full object-cover"
                />
              ) : (
                <>
                  {/* Upload Icon */}
                  <div className="mb-3 rounded-full bg-red-100 p-4">
                    <svg
                      className="h-7 w-7 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>

                  <p className="text-sm font-medium text-gray-700">
                    Click to upload your cover image
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    PNG, JPG or WEBP
                  </p>
                </>
              )}

              <input
                id="blog-image"
                name="image"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                required
                className="hidden"
              />
            </label>
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
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
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
              className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              Write clear and engaging content for your readers.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => {
                setFormData({
                  title: "",
                  details: "",
                });
                setImage(null);
                setImagePreview("");
              }}
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.98]"
            >
              Publish Blog
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

