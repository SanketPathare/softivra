import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Layout, Cpu, Award, Palette, LineChart } from "lucide-react";

const ServicesShowcase = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Your website is the digital storefront of your business. We craft custom visual identities and user interfaces that resonate with your target audience, establishing immediate trust and credibility.",
      hoverColor: "hover:bg-Maincolor",
      icon: <Layout className="w-6 h-6 text-black stroke-[2.5px]" />,
    },
    {
      title: "Web Development",
      description:
        "We build robust, scalable, and responsive web applications using modern stacks. Our development workflow ensures optimized performance, cross-device consistency, and clean code architectures.",
      hoverColor: "hover:bg-Secondcolor hover:text-white",
      icon: <Code className="w-6 h-6 text-black stroke-[2.5px] group-hover:text-white transition-colors duration-150" />,
    },
    {
      title: "Custom Software",
      description:
        "Tailor-made software built to optimize your unique business operations. From standalone applications to complex enterprise integrations, we create tools that enhance automation and productivity.",
      hoverColor: "hover:bg-teal-accent",
      icon: <Cpu className="w-6 h-6 text-black stroke-[2.5px]" />,
    },
    {
      title: "Logo & Branding",
      description:
        "Create a memorable presence with unified brand identity design. We deliver pixel-perfect logos, brand assets, and styling guidelines that set you apart in highly competitive markets.",
      hoverColor: "hover:bg-blue-accent hover:text-white",
      icon: <Award className="w-6 h-6 text-black stroke-[2.5px] group-hover:text-white transition-colors duration-150" />,
    },
    {
      title: "Graphic Design",
      description:
        "Meticulously designed marketing collateral, social media assets, and print media. We translate complex brand ideas into clear, striking visual statements that drive engagement.",
      hoverColor: "hover:bg-Maincolor",
      icon: <Palette className="w-6 h-6 text-black stroke-[2.5px]" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your business through search engine optimization, content strategy, and target outreach campaigns. We analyze user demographics and behaviors to maximize your marketing returns.",
      hoverColor: "hover:bg-teal-accent",
      icon: <LineChart className="w-6 h-6 text-black stroke-[2.5px]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#faf6ee] py-16 px-4 sm:px-6 lg:px-8 relative border-b-4 border-black">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 border-2 border-black bg-teal-accent font-black text-[9px] uppercase tracking-widest block mb-4 shadow-[2px_2px_0px_0px_#000]">
            WHAT WE DO
          </span>
          <motion.h2
            className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Services Designed for Growth
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="relative"
            >
              <div
                className={`bg-white border-3 border-black p-6 sm:p-8 min-h-[250px] flex flex-col justify-between shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 group ${service.hoverColor} cursor-pointer`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      {service.icon}
                    </div>
                    <motion.h3
                      className="font-black text-base sm:text-lg uppercase tracking-wide group-hover:text-black transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold group-hover:text-black/85 transition-colors line-clamp-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                <div className="pt-4">
                  <Link to="/services">
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-white text-black font-black text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] group-hover:bg-white group-hover:text-black transition-all cursor-pointer"
                    >
                      Find out more
                      <span>&rarr;</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/services">
            <button
              className="px-6 py-3 border-3 border-black bg-white hover:bg-black hover:text-white text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
            >
              View Detailed Services
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
