
"use client";

import { useState } from "react";

export default function CreateBlog() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create a New Blog
          </h1>

          <p className="mt-2 text-gray-500">
            Share your thoughts, knowledge, and experiences with your readers.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Image Section */}
          <div className="mb-7">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Cover Image
            </label>

            <label
              htmlFor="blog-image"
              className="group flex min-h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-red-500 hover:bg-red-50"
            >
              {image ? (
                <img
                  src={image}
                  alt="Blog preview"
                  className="h-64 w-full object-cover"
                />
              ) : (
                <>
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
                        d="M4 16l4.586-4.586a2 2 0 016.828 0L20 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L11 16m-7 4h16a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1z"
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
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
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
              type="text"
              placeholder="Enter your blog title..."
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
              rows={12}
              placeholder="Write your blog content here..."
              className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              Write clear and engaging content for your readers.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="button"
              className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.98]"
            >
              Publish Blog
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

