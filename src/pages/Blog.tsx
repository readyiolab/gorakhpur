import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogApi } from "@/lib/api/forms";


interface Blog {
  blog_id: number;
  blog_title: string;
  blog_slug: string;
  blog_description: string;
  blog_image: string;
  blog_content: string;
  blog_author: string;
  created_at: string;
  updated_at: string;
  blog_tags?: string;
  blog_status: string;
  blog_views: number;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await blogApi.getAll("lb_interiors");
        setBlogs(response.blogs || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Date unavailable";
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const getExcerpt = (content: string, length = 150) => {
    const text = stripHtml(content);
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
      <Helmet>
        <title>Blog - LB Interior Designs</title>
        <meta name="description" content="Read our latest blog posts about interior design, home improvement, and lifestyle trends." />
      </Helmet>
      <div className="bg-white">
        {/* Hero Section - With top padding for fixed navbar */}
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#004445] via-[#003333] to-[#002d2d] text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">Our Blog</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
                Discover insights, design tips, and inspiration to transform your living spaces into beautiful havens
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-28">
          {loading ? (
            <div className="flex justify-center items-center min-h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#f8b400] mx-auto mb-6"></div>
                <p className="text-xl text-gray-600">Loading blog posts...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center min-h-96">
              <p className="text-xl text-red-600">{error}</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex flex-col justify-center items-center min-h-96">
              <p className="text-xl text-gray-600 mb-6">No blog posts yet.</p>
              <Link to="/" className="bg-[#004445] text-white px-8 py-3 rounded-lg hover:bg-[#003333] font-medium">
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.blog_id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group border border-gray-200 rounded-xl bg-white"
                >
                  {/* Featured Image */}
                  {blog.blog_image && (
                    <Link to={`/blog/${blog.blog_slug}`} className="relative w-full h-56 overflow-hidden bg-gray-200 block">
                      <img
                        src={blog.blog_image}
                        alt={blog.blog_title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </Link>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-[#004445] transition-colors leading-tight">
                      <Link to={`/blog/${blog.blog_slug}`}>{blog.blog_title}</Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#f8b400]" />
                        {formatDate(blog.created_at)}
                      </div>
                      {blog.blog_author && (
                        <div className="flex items-center gap-2">
                          <User className="w-5 h-5 text-[#f8b400]" />
                          {blog.blog_author}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-700 mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {getExcerpt(blog.blog_description || blog.blog_content, 120)}
                    </p>

                    {/* Tags */}
                    {blog.blog_tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.blog_tags.split(",").slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-[#faf5e4] text-[#004445] px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#f8b400]/20 transition-colors"
                          >
                            #{tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer Button */}
                    <Link 
                      to={`/blog/${blog.blog_slug}`} 
                      className="w-full bg-[#004445] hover:bg-[#003333] text-white py-3 px-4 rounded-lg text-center font-semibold flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                    >
                      Read More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Blog;