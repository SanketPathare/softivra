import { motion } from "framer-motion";
import { blogData } from "../Data/blogData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#faf6ee] pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-black text-black">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              Blogs
            </h1>
            <p className="text-black text-xs sm:text-sm font-bold max-w-xl mx-auto leading-relaxed">
              Read Softivra's latest insights and thoughts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Listings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto py-16 max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-black uppercase tracking-tight">
            Discover more insights!
          </h2>
          <p className="text-center max-w-2xl mx-auto text-xs sm:text-sm text-black font-bold leading-relaxed">
            Dive into our collection of insightful blogs covering a range of
            topics, from industry trends to expert tips. Discover valuable
            information, stay updated, and expand your knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group bg-white border-3 border-black overflow-hidden shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="relative overflow-hidden border-b-3 border-black bg-[#ffd13b]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-all duration-500 grayscale contrast-125 hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit px-2 py-0.5 text-[9px] uppercase font-black tracking-wider bg-[#ff4a77] text-black mb-3 border border-black shadow-[1px_1px_0px_0px_#000]">
                  {post.category}
                </span>
                <h3 className="text-sm sm:text-base font-black mb-3 line-clamp-2 text-black uppercase tracking-tight leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto pt-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 bg-white text-black border-2 border-black px-3 py-1.5 text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor transition-all"
                  >
                    <span>Read More</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 font-bold">&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
