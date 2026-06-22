import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "../../Data/blogData";

const BlogInsights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.02, y: -6,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-[#faf6ee] text-black ">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="flex justify-center items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-4 text-center">
              <div className="inline-block px-3 py-1 border-2 border-black bg-Secondcolor text-white font-black text-[9px] uppercase tracking-widest shadow-[2px_2px_0px_0px_#000]">
                OUR WRITINGS
              </div>
              <motion.h2
                className="text-3xl sm:text-5xl font-black leading-none tracking-tighter uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Discover More{" "}
                <span className="inline-block px-3 py-1 bg-Maincolor border-3 border-black text-black shadow-[4px_4px_0_0_#000] rotate-[1deg]">Insights</span>
              </motion.h2>

              <motion.p
                className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-bold uppercase tracking-wide"
                variants={itemVariants}
              >
                Dive into our collection of insightful blogs covering industry trends and expert tips to expand your knowledge.
              </motion.p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {blogData.slice(0, 3).map((post) => (
              <motion.div
                key={post.slug}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="bg-white border-3 border-black rounded-none overflow-hidden shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 p-5">
                  {/* Grayscaled Card Image */}
                  <div className="h-44 border-2 border-black overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale contrast-[1.3] brightness-[0.9] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="pt-4">
                    <span className="inline-block px-3 py-1 rounded-none text-[9px] uppercase font-black tracking-widest bg-teal-accent text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      {post.category}
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    <h3 className="text-base sm:text-lg font-black text-black leading-snug line-clamp-2 uppercase tracking-wide group-hover:text-Secondcolor transition-colors duration-150">
                      {post.title}
                    </h3>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-black text-xs font-black uppercase tracking-widest border-b-2 border-black hover:border-transparent transition-all cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Button */}
          <motion.div variants={itemVariants} className="text-center mt-14">
            <Link to="/blogs">
              <motion.button
                className="bg-white border-3 border-black px-6 py-3 font-black text-xs uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] cursor-pointer"
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
