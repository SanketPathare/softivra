import { Twitter, Facebook, Linkedin, Link2, ArrowLeft } from "lucide-react";
import { blogData } from "../Data/blogData";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    navigate("/blog");
    return null;
  }

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div className="min-h-screen pb-16 bg-slate-800">
      {/* Back Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <Link
          to="/blogs"
          className="w-fit flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700/50 hover:bg-slate-800 rounded-lg transition-all duration-300 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-4 text-center space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold border border-blue-500/20">
            {post.category}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
          {post.title}
        </h1>
      </div>

      {/* Featured Image and Sidebar */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Article Image & Content */}
          <div className="flex-1 w-full space-y-6">
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>

            <article className="space-y-6">
              {post.sections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {section.heading}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            {/* Share Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">
                Share Article
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => window.open(post.socialLinks[1].TwitterUrl, "_blank")}
                  className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded-lg transition-colors border border-slate-700 text-xs font-semibold"
                >
                  <Twitter size={14} />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => window.open(post.socialLinks[0].FacebookUrl, "_blank")}
                  className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-700 text-blue-500 rounded-lg transition-colors border border-slate-700 text-xs font-semibold"
                >
                  <Facebook size={14} />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => window.open(post.socialLinks[2].LinkedinUrl, "_blank")}
                  className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded-lg transition-colors border border-slate-700 text-xs font-semibold"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-700 text-gray-300 rounded-lg transition-colors border border-slate-700 text-xs font-semibold"
                >
                  <Link2 size={14} />
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-gray-400 rounded-full text-[10px] font-bold"
                >
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
