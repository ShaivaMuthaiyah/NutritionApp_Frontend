import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../services/appConfig";



export default function BlogListingTop() {
  const { API_URL, BUCKET_URL } = config;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        // const response = await fetch(`${API_URL}/api/blogs`);
        const response = await fetch(`${API_URL}/blogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-lime-700">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.blogId}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.date} className="text-gray-500">
                  {blog.date}
                </time>
                <Link
                  to={`/blogs/${blog.blogId}`} // Client-side routing with Link
                  className="relative z-10 rounded-full bg-lime-300 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100"
                >
                  {blog.category}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link to={`/blogs/${blog.blogId}`}>
                    {/* Use consistent BlogId */}
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {blog.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    {blog.author}
                  </p>
                  <p className="text-lime-800">{blog.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
