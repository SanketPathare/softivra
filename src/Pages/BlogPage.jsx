import { motion } from "framer-motion";
import { blogData } from "../Data/blogData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className=" text-white ">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            data-animate
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
              Blogs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Blog Listings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mx-auto py-12 max-w-7xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Discover more insights!
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10">
          Dive into our collection of insightful blogs covering a range of
          topics, from industry trends to expert tips. Discover valuable
          information, stay updated, and expand your knowledge.
          <br />
          Start reading now!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogData.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-92 h-auto object-fit rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <div className="flex space-x-2 mb-4"></div>
              <Link
                to={`/blog/${post.slug}`}
                className="text-Maincolor hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
