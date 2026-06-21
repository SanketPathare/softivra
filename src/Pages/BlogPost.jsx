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
          className="w-fit flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/80 rounded-xl transition-all duration-300 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1.5 transition-transform duration-300"
          />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6 text-center space-y-5">
        <div>
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-Maincolor to-Secondcolor text-white rounded-full text-xs font-bold shadow-lg shadow-Maincolor/20">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {post.title}
        </h1>
      </div>

      {/* Featured Image and Sidebar */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Article Image & Content */}
          <div className="flex-1 w-full space-y-8">
            <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </div>

            <article className="space-y-8">
              {post.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {section.heading}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6 lg:sticky lg:top-8">
            {/* Share Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-4 shadow-lg">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider">
                Share Article
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => window.open(post.socialLinks[1].TwitterUrl, "_blank")}
                  className="flex items-center justify-center gap-2 p-2.5 bg-slate-800/80 hover:bg-Maincolor/20 text-Maincolor rounded-xl transition-all border border-slate-700/50 text-xs font-semibold hover:border-Maincolor/30"
                >
                  <Twitter size={14} />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => window.open(post.socialLinks[0].FacebookUrl, "_blank")}
                  className="flex items-center justify-center gap-2 p-2.5 bg-slate-800/80 hover:bg-Maincolor/20 text-Maincolor rounded-xl transition-all border border-slate-700/50 text-xs font-semibold hover:border-Maincolor/30"
                >
                  <Facebook size={14} />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => window.open(post.socialLinks[2].LinkedinUrl, "_blank")}
                  className="flex items-center justify-center gap-2 p-2.5 bg-slate-800/80 hover:bg-Maincolor/20 text-Maincolor rounded-xl transition-all border border-slate-700/50 text-xs font-semibold hover:border-Maincolor/30"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 p-2.5 bg-slate-800/80 hover:bg-Maincolor/20 text-Maincolor rounded-xl transition-all border border-slate-700/50 text-xs font-semibold hover:border-Maincolor/30"
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
                  className="px-3 py-1.5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 text-gray-300 rounded-full text-xs font-bold hover:border-Maincolor/30 transition-colors"
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
