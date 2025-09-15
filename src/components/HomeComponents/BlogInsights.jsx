import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BlogInsights = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const blogPosts = [
    {
      id: 1,
      category: 'TECHNOLOGY',
      title: 'How to Grow Your Business with Technology',
      image: 'https://nextdigit.in/storage/blog-articles/1728302589542grow%20your%20business%20-%20nextdigit%20software.png',
    
    },
    // {
    //   id: 2,
    //   category: 'MARKETING',
    //   title: 'Digital Marketing Strategies for 2024',
    //   image: '/api/placeholder/400/250',
    //   color: 'from-blue-400 to-purple-500'
    // },
    // {
    //   id: 3,
    //   category: 'ANALYTICS',
    //   title: 'Data-Driven Decision Making',
    //   image: '/api/placeholder/400/250',
    //   color: 'from-green-400 to-blue-500'
    // }
  ];

  const trendingTopics = ['technology', 'marketing', 'analytics', 'design', 'innovation'];

  return (
    <div className=" bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className=" flex justify-center items-center  mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover more{' '}
                <motion.span 
                  className="bg-Maincolor bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  insights!
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-5xl text-center"
                variants={itemVariants}
              >
                Dive into our collection of insightful blogs covering a range of topics, from industry trends to expert tips. Discover valuable information, stay updated, and expand your knowledge.
              </motion.p>
             
            </motion.div>

       
          </div>

          {/* Trending Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold">Trending:</h3>
              <div className="flex flex-wrap gap-3">
                {trendingTopics.map((topic, index) => (
                  <motion.span
                    key={topic}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium cursor-pointer hover:bg-white/20 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(post.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Category Badge */}
                  <div className="p-6 pb-0">
                    <motion.span 
                      className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-wider bg-Maincolor  text-white`}
                      animate={hoveredCard === post.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {post.category} 
                    </motion.span>
                  </div>

                  {/* Image Area */}
                  <div className="p-6">
                    <motion.div 
                      className="h-52 rounded-2xl relative overflow-hidden"
                      animate={hoveredCard === post.id ? { scale: 1.02 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Main Image */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-fit"
                      />
                      
                      
                      
                  
                    </motion.div>

                    {/* Content */}
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-4 group-hover:text-Maincolor transition-colors">
                        {post.title}
                      </h3>
                      
                      <motion.button
                        className="flex items-center gap-2 text-Maincolor font-medium transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore more...
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogInsights;