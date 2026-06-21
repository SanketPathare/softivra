import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "../../Data/blogData";

const BlogInsights = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -6,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-slate-800 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="flex justify-center items-center mb-12">
            <motion.div variants={itemVariants} className="space-y-4 text-center">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Discover more{" "}
                <span className="text-Maincolor">insights!</span>
              </motion.h2>

              <motion.p
                className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto"
                variants={itemVariants}
              >
                Dive into our collection of insightful blogs covering a range of
                topics, from industry trends to expert tips. Discover valuable
                information, stay updated, and expand your knowledge.
              </motion.p>
            </motion.div>
          </div>

          {/* Blog Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {blogData.slice(0, 3).map((post) => (
              <motion.div
                key={post.slug}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg p-5">
                  {/* Image Area */}
                  <div className="h-44 rounded-xl overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="pt-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-Maincolor/15 text-blue-300">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-4 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-Maincolor text-xs font-semibold hover:underline"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link to="/blogs">
              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-5 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer"
                whileTap={{ scale: 0.97 }}
              >
                Explore all blogs
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogInsights;
