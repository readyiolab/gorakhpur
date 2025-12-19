import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface BlogPost {
  blog_id: number;
  blog_title: string;
  blog_slug: string;
  blog_excerpt: string;
  blog_description: string;
  blog_content: string;
  blog_tags: string;
  blog_author: string;
  blog_status: string;
  blog_image?: string;
  blog_views: number;
  created_at: string;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }
    
    fetchBlog();
  }, [slug]);

  const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000/api'
  : 'https://lbservicesgorakhpur.com/api';

  const fetchBlog = async () => {
  try {
    setLoading(true);
    const response = await fetch(`${API_BASE_URL}/blog/${slug}?blog_site=lb_interiors`);
    const data = await response.json();

    if (data.success && data.blog) {
      setBlog(data.blog);
    } else {
      navigate('/');
    }
  } catch (error) {
    console.error('Error fetching blog:', error);
    navigate('/');
  } finally {
    setLoading(false);
  }
};

  if (loading) {
    return (
      
        <div className="min-h-screen md:pt-32 pb-16 md:pb-24 flex items-center justify-center bg-gradient-to-br from-[#004445] via-[#003333] to-[#002d2d] text-white pt-20">
          <div className="text-center">
            <div className="relative w-12 h-12 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-[#f8b400]/30 rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
     
    );
  }

  if (!blog) {
    return (
      
        <div className="min-h-screen  md:pt-32 pb-16 md:pb-24 flex items-center justify-center bg-gradient-to-br from-[#004445] via-[#003333] to-[#002d2d] text-white pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-[#004445]">Blog Post Not Found</h1>
            <button
              onClick={() => navigate('/blog')}
              className="bg-[#004445] text-white px-6 py-2 rounded-lg hover:bg-[#003333]"
            >
              Back to Blog
            </button>
          </div>
        </div>
     
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.blog_title} | LB Interiors</title>
        <meta name="description" content={blog.blog_excerpt} />
        <meta name="keywords" content={blog.blog_tags} />
        <meta property="og:title" content={blog.blog_title} />
        <meta property="og:description" content={blog.blog_excerpt} />
        {blog.blog_image && <meta property="og:image" content={blog.blog_image} />}
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header Section - With top padding for fixed navbar */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#004445] via-[#003333] to-[#002d2d] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-white hover:text-white/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {blog.blog_title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#f8b400]" />
                <span className="font-medium">{blog.blog_author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#f8b400]" />
                <span>{new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f8b400] font-semibold">{blog.blog_views}</span>
                <span>views</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {blog.blog_image && (
          <section className="py-12 md:py-16 bg-gradient-to-b from-[#faf5e4] via-[#f5f0e0] to-[#f8b400]/10">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={blog.blog_image}
                  alt={blog.blog_title}
                  className="w-full h-auto max-h-[600px] object-cover  transition-transform duration-300"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            {/* Excerpt */}
            {blog.blog_excerpt && (
              <div className="mb-12 p-8 bg-gradient-to-r from-[#faf5e4] to-[#f5f0e0] rounded-xl border-l-4 border-[#f8b400] shadow-sm">
                <p className="text-xl text-gray-800 italic leading-relaxed font-medium">
                  "{blog.blog_excerpt}"
                </p>
              </div>
            )}

            {/* Description */}
            {blog.blog_description && (
              <div className="mb-12">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {blog.blog_description}
                </p>
              </div>
            )}

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none mb-16 text-gray-700 [&>*]:mb-6 [&>h3]:text-3xl [&>h3]:font-bold [&>h3]:text-[#004445] [&>h3]:mt-12 [&>h3]:mb-6 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-base [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:text-gray-700 [&>ul]:mb-6 [&>li]:mb-3 [&>li]:text-base [&>strong]:font-bold [&>strong]:text-[#004445]"
              dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            />

            {/* Tags Section */}
            {blog.blog_tags && (
              <div className="pt-12 border-t-2 border-gray-200">
                <h3 className="text-lg font-semibold text-[#004445] mb-6">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {blog.blog_tags.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#f8b400]/10 text-[#004445] rounded-full text-sm font-medium hover:bg-[#f8b400]/20 transition-colors cursor-pointer"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="mt-16 pt-12 border-t-2 border-gray-200">
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 bg-[#004445] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#003333] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Blog Posts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
