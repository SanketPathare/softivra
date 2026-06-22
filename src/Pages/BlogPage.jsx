import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogData } from "../Data/blogData";
import AnimatedGridBackground from "../components/ui/AnimatedGridBackground";
import MorphingShape from "../components/ui/MorphingShape";
import SplitTextReveal from "../components/ui/SplitTextReveal";
import TiltCard from "../components/ui/TiltCard";
import AnimatedDivider from "../components/ui/AnimatedDivider";

const BlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-[#faf6ee] pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-black">
        <AnimatedGridBackground variant="dots" />
        <div className="absolute top-6 right-10 opacity-15 hidden lg:block">
          <MorphingShape color="#ff4a77" size={70} speed={4} />
        </div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              <SplitTextReveal>Blogs</SplitTextReveal>
            </h1>
            <p className="font-bold text-xs sm:text-sm max-w-lg mx-auto text-black border-2 border-black bg-[#ffd13b] px-4 py-2 inline-block shadow-[3px_3px_0px_0px_#000] tracking-widest uppercase">
              Read Softivra's latest insights and thoughts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Listings */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-black uppercase tracking-tight">
              <SplitTextReveal>Discover more insights!</SplitTextReveal>
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-black font-bold leading-relaxed">
              Dive into our collection of insightful blogs covering a range of topics, from industry trends to expert tips.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {blogData.map((post, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard tiltDegree={3} glare={false}>
                  <div className="group bg-white border-3 border-black overflow-hidden shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                    <div className="relative overflow-hidden border-b-3 border-black bg-Maincolor">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-all duration-500 grayscale contrast-125 hover:grayscale-0 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block w-fit px-2 py-0.5 text-[9px] uppercase font-black tracking-wider bg-Secondcolor text-white mb-3 border border-black shadow-[1px_1px_0px_0px_#000]">
                        {post.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-black mb-3 line-clamp-2 text-black uppercase tracking-tight leading-snug group-hover:text-Secondcolor transition-colors">
                        {post.title}
                      </h3>
                      <div className="mt-auto pt-3">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 bg-white text-black border-2 border-black px-3 py-1.5 text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all"
                        >
                          <span>Read More</span>
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1 font-bold">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPage;
