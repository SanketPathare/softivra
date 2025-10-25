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
      // You can add a toast notification here
      alert("Link copied to clipboard!");
    });
  };

 
  return (
    <div className="min-h-screen ">
      {/* Hero Section with Animation */}
      <div className="overflow-hidden">
        <div className=" inset-0 bg-gradient-to-b from-blue-600/20 to-transparent "></div>
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-8">
          {/* Back Button */}

          <Link
            to="/blogs"
            className=" w-fit flex items-center justify-start gap-2 px-4 py-2 mb-6 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg  transition-all duration-300 group animate-fade-in text-sm sm:text-base"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300 "
            />
            <span >Back to Blogs</span>
          </Link>

          <div className="mb-6 animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              {post.category}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl  text-center font-bold text-white mb-6 leading-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Featured Image with Animation */}
      <div className="max-w-5xl mx-auto px-4 mb-10 ">
        <div className="flex flex-col lg:flex-row justify-around items-start gap-20">
          <div className="flex-1 animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl group relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* Sidebar with Animation */}
          <div
            className="lg:w-80 animate-slide-left"
            style={{ animationDelay: "0.3s" }}
          >
            <aside className="space-y-6">
              {/* Share Card */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-4">
                  Share this article
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => window.open(post.socialLinks[1].TwitterUrl, "_blank")}
                    className="flex items-center justify-center gap-2 p-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all duration-300 border border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Twitter size={18} />
                    <span className="text-sm">Twitter</span>
                  </button>
                  <button
                    onClick={() => window.open(post.socialLinks[0].FacebookUrl, "_blank")}
                    className="flex items-center justify-center gap-2 p-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 rounded-lg transition-all duration-300 border border-blue-600/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Facebook size={18} />
                    <span className="text-sm">Facebook</span>
                  </button>
                  <button
                    onClick={() => window.open(post.socialLinks[2].LinkedinUrl, "_blank")}
                    className="flex items-center justify-center gap-2 p-3 bg-blue-700/10 hover:bg-blue-700/20 text-blue-400 rounded-lg transition-all duration-300 border border-blue-700/30 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Linkedin size={18} />
                    <span className="text-sm">LinkedIn</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-2 p-3 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-all duration-300 border border-slate-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/20"
                  >
                    <Link2 size={18} />
                    <span className="text-sm">Copy</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Animation */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div>
          {/* Main Content */}
          <article className="lg:col-span-8 space-y-8">
            {post.sections.map((section, index) => (
              <div
                key={index}
                className="prose prose-invert max-w-none animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {section.heading}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </article>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
