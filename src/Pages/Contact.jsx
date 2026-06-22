import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Phone, Mail } from "lucide-react";
import AnimatedGridBackground from "../components/ui/AnimatedGridBackground";
import MorphingShape from "../components/ui/MorphingShape";
import SplitTextReveal from "../components/ui/SplitTextReveal";
import TiltCard from "../components/ui/TiltCard";
import AnimatedDivider from "../components/ui/AnimatedDivider";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", contactNo: "", subject: "", message: "" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <div className="min-h-screen bg-[#faf6ee] pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-black">
        <AnimatedGridBackground variant="dots" />
        <div className="absolute top-6 right-10 opacity-15 hidden lg:block">
          <MorphingShape color="#00b8a9" size={70} speed={4} />
        </div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-4 uppercase tracking-tight">
              <SplitTextReveal>Contact Us</SplitTextReveal>
            </h1>
            <p className="font-bold text-xs sm:text-sm max-w-lg mx-auto text-black border-2 border-black bg-[#ffd13b] px-4 py-2 inline-block shadow-[3px_3px_0px_0px_#000] tracking-widest uppercase">
              Get in touch with the Softivra team for solutions and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <AnimatedGridBackground variant="grid" />
        <div className="absolute bottom-6 left-8 opacity-[0.10] hidden lg:block">
          <MorphingShape color="#ffd13b" size={85} speed={6} />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div variants={staggerContainer}>
              <TiltCard tiltDegree={3} glare={false}>
                <div className="bg-white border-3 border-black p-5 sm:p-6 lg:p-8 shadow-[4px_4px_0_0_#000]">
                  <motion.h2
                    className="text-lg sm:text-xl font-black text-black mb-5 uppercase tracking-tight"
                    variants={fadeInUp}
                  >
                    Send Us a <span className="bg-[#ffd13b] border-2 border-black px-1.5 shadow-[1px_1px_0_0_#000] inline-block">Message</span>
                  </motion.h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div variants={fadeInUp} className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-black text-black uppercase tracking-wider">Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-white border-2 border-black text-black placeholder-gray-500 text-sm font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0px_0px_#000] transition-all"
                        placeholder="Your name" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-black text-black uppercase tracking-wider">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-white border-2 border-black text-black placeholder-gray-500 text-sm font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0px_0px_#000] transition-all"
                        placeholder="Your email address" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-1.5">
                      <label htmlFor="contactNo" className="block text-xs font-black text-black uppercase tracking-wider">Contact No. *</label>
                      <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-white border-2 border-black text-black placeholder-gray-500 text-sm font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0px_0px_#000] transition-all"
                        placeholder="Your contact number" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-black text-black uppercase tracking-wider">Subject *</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-white border-2 border-black text-black placeholder-gray-500 text-sm font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0px_0px_#000] transition-all"
                        placeholder="Message subject" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-black text-black uppercase tracking-wider">Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                        className="w-full px-4 py-3 bg-white border-2 border-black text-black placeholder-gray-500 text-sm font-bold outline-none resize-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0px_0px_#000] transition-all"
                        placeholder="Your message"></textarea>
                    </motion.div>
                    <motion.button type="submit"
                      className="w-full bg-[#ff4a77] text-black font-black uppercase py-3 px-4 text-xs cursor-pointer border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] tracking-wider transition-all"
                      variants={fadeInUp} whileTap={{ scale: 0.98 }}>
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </TiltCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={staggerContainer}>
              <TiltCard tiltDegree={3} glare={false}>
                <div className="bg-white border-3 border-black p-5 sm:p-6 lg:p-8 space-y-6 shadow-[4px_4px_0_0_#000]">
                  <div>
                    <motion.h2 className="text-lg sm:text-xl font-black text-black mb-2 uppercase tracking-tight" variants={fadeInUp}>
                      Get in Touch
                    </motion.h2>
                    <motion.p className="text-black/85 text-xs sm:text-sm font-semibold leading-relaxed" variants={fadeInUp}>
                      Our team is ready to assist you with any inquiries or provide the information you need.
                    </motion.p>
                  </div>
                  <div className="space-y-5">
                    <motion.div className="flex items-center gap-4" variants={fadeInUp}>
                      <div className="bg-[#00b8a9] p-3 border-2 border-black text-black shadow-[2px_2px_0px_0px_#000]">
                        <Phone size={18} className="stroke-[2.5px]" />
                      </div>
                      <div>
                        <h3 className="font-black text-black text-xs sm:text-sm uppercase tracking-wider">Phone Number</h3>
                        <p className="text-black font-bold text-sm">+91 76206 xxx</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-center gap-4" variants={fadeInUp}>
                      <div className="bg-[#00b8a9] p-3 border-2 border-black text-black shadow-[2px_2px_0px_0px_#000]">
                        <Mail size={18} className="stroke-[2.5px]" />
                      </div>
                      <div>
                        <h3 className="font-black text-black text-xs sm:text-sm uppercase tracking-wider">Email Address</h3>
                        <p className="text-black font-bold text-sm">contact@softivra.com</p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div className="border-t-3 border-black pt-6 space-y-4" variants={fadeInUp}>
                    <h3 className="font-black text-black text-xs sm:text-sm uppercase tracking-wider">Download Contact Card</h3>
                    <p className="text-black/80 text-xs sm:text-sm font-semibold leading-relaxed">
                      Download our official eContact card (vCard) to save our details directly to your mobile device or address book.
                    </p>
                    <Link to="/softivra.vcf" target="_blank" download="softivra.vcf"
                      className="inline-flex items-center justify-center gap-2 bg-[#ffd13b] text-black font-black py-3 px-5 text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] w-full transition-all tracking-wider">
                      <Download className="w-4 h-4 stroke-[2.5px]" />
                      Download eVisiting Card
                    </Link>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
