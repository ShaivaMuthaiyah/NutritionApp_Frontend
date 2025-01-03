import API_URL from '../services/appConfig';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import defaultImage from "../images/default_image.jpg"


export default function BlogDetail() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        // const response = await fetch(`${API_URL}/api/blogs/${blogId}`); // Adjust URL for production
        const response = await fetch(`${API_URL}/blogs/${blogId}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        const data = await response.json();
        console.log(data);
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [blogId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return blog ? (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Blog Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">{blog.category}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {blog.title}
          </p>
          <p className="mt-6 text-lg text-gray-600">{blog.description}</p>
        </div>
         {/* Blog Image */}
         <div className="mb-6">
          <img
              src={blog.imgSrc || defaultImage}
              alt={blog.title || "Default"}
              className="w-2/5 mx-auto object-contain"
          />
          </div>
        {/* Blog Content */}
        <div className="mt-10 border-t border-gray-200 pt-10 lg:text-center">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>{blog.content}</p>
          </div>
        </div>
        {/* Author and Date */}
        <div className="mt-16 flex justify-between items-center border-t border-gray-200 pt-6">
          <div>
            <p className="text-base font-medium text-gray-900">Written by: {blog.author}</p>
            <p className="text-sm text-gray-600">Published on: {blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
