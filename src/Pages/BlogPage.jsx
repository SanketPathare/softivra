import { motion } from "framer-motion";
import { blogData } from "../Data/blogData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-Maincolor/10 via-transparent to-Secondcolor/5">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Blogs
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Discover more insights!
          </h2>
          <p className="text-center max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
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
              whileHover={{ y: -8 }}
              className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-Maincolor/5 transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-gradient-to-r from-Maincolor to-Secondcolor text-white mb-3 shadow-lg shadow-Maincolor/20">
                  {post.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold mb-3 line-clamp-2 text-white group-hover:text-Maincolor transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="mt-auto pt-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-Maincolor hover:text-Secondcolor text-xs font-semibold transition-all duration-300 group/link"
                  >
                    <span>Read More</span>
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">&rarr;</span>
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
