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
    <div className="min-h-screen pb-16 bg-[#faf6ee]">
      {/* Back Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <Link
          to="/blogs"
          className="w-fit flex items-center gap-2 px-4 py-2 text-xs font-black uppercase text-black bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] transition-all group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform duration-300 stroke-[3px]"
          />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6 text-center space-y-5">
        <div>
          <span className="inline-block px-3 py-1.5 bg-[#ff4a77] text-black text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000] tracking-widest">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight uppercase tracking-tight">
          {post.title}
        </h1>
      </div>

      {/* Featured Image and Sidebar */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Article Image & Content */}
          <div className="flex-1 w-full space-y-8">
            <div className="border-3 border-black shadow-[4px_4px_0_0_#000] bg-[#ffd13b] p-3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[400px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <article className="space-y-8">
              {post.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="text-black text-xs sm:text-sm font-semibold leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6 lg:sticky lg:top-8">
            {/* Share Card */}
            <div className="bg-white border-3 border-black p-6 space-y-4 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-black text-xs font-black uppercase tracking-wider">
                Share Article
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => window.open(post.socialLinks[1].TwitterUrl, "_blank")}
                  className="flex items-center justify-center gap-2 p-2.5 bg-white text-black transition-all border-2 border-black text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
                >
                  <Twitter size={14} className="stroke-[3px]" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => window.open(post.socialLinks[0].FacebookUrl, "_blank")}
                  className="flex items-center justify-center gap-2 p-2.5 bg-white text-black transition-all border-2 border-black text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
                >
                  <Facebook size={14} className="stroke-[3px]" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => window.open(post.socialLinks[2].LinkedinUrl, "_blank")}
                  className="flex items-center justify-center gap-2 p-2.5 bg-white text-black transition-all border-2 border-black text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
                >
                  <Linkedin size={14} className="stroke-[3px]" />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 p-2.5 bg-white text-black transition-all border-2 border-black text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] cursor-pointer"
                >
                  <Link2 size={14} className="stroke-[3px]" />
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#00b8a9] border-2 border-black text-black text-xs font-black shadow-[2px_2px_0_0_#000] uppercase tracking-wider hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all cursor-default"
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
