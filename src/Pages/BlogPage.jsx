import { motion } from "framer-motion";
import { blogData } from "../Data/blogData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="text-white pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-2">
              Blogs
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
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
        className="mx-auto py-12 max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center">
          Discover more insights!
        </h2>
        <p className="text-center max-w-xl mx-auto mb-10 text-xs sm:text-sm text-gray-400 leading-relaxed">
          Dive into our collection of insightful blogs covering a range of
          topics, from industry trends to expert tips. Discover valuable
          information, stay updated, and expand your knowledge.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider bg-Maincolor/15 text-blue-300 mb-3">
                  {post.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold mb-3 line-clamp-2 text-white">
                  {post.title}
                </h3>
              </div>
              <div className="pt-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-Maincolor hover:underline text-xs font-semibold"
                >
                  Read More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;