import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CTASection from "../components/HomeComponents/CTASection";

const Services = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "web-design",
      title: "Web Design",
      image: "/ServicesImages/WebDesign.svg",
      description:
        "Our Web Design service transforms your online presence with visually compelling, user-friendly websites. From modern layouts to user experience optimization, ensuring your site not only looks outstanding but converts visitors into customers.",
      detailText:
        "From concept to launch, our team crafts every detail with precision. We believe a custom website should make the perfect impression, getting your brand noticed online and converting visitors into loyal customers.",
      features: [
        "Responsive Web Design",
        "Landing Page Design",
        "Blog Design",
        "Parallax Scrolling Design",
        "SEO-Optimized Design",
        "Branding & Identity Design",
        "UI/UX Design",
        "Custom Website Design",
        "Website Redesign",
        "Mobile-First Design",
        "Wireframing & Prototyping",
        "Interactive Website Design",
        "Web Design Consultation",
        "Website Maintenance & Updates",
      ],
      gradient: "from-blue-600 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      id: "web-development",
      title: "Web Development",
      image: "/ServicesImages/WebDevelopment.svg",
      description:
        "Our Web development services bring concepts to life through custom web solutions. We leverage the latest technologies and best practices to build robust, scalable, and secure web applications that meet your specific business needs and exceed user expectations.",
      detailText:
        "Whether you need a simple website or a complex web application, our development team has the expertise to deliver exceptional results that drive your business forward.",
      features: [
        "Frontend Development",
        "Backend Development",
        "Full-Stack Development",
        "React Development",
        "Node.js Development",
        "Database Development",
        "API Development",
        "E-commerce Development",
        "CMS Development",
        "Web App Development",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
      gradient: "from-green-600 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      image: "/ServicesImages/CustomSoftware.svg",
      description:
        "Our custom software services offer business solutions designed to meet the unique requirements of your organization. We build tailor-made applications that streamline your workflows, enhance productivity, and give your business a competitive edge.",
      detailText:
        "From initial concept to development and ongoing support, we ensure your business receives a fully customized solution that evolves with your needs.",
      features: [
        "Desktop App Development",
        "Enterprise Application Development",
        "Mobile Application Development",
        "Web Application Development",
        "CRM Development",
        "ERP Development",
        "Business Process Automation",
        "Cloud Solutions",
        "System Integration",
        "Legacy System Modernization",
        "API Development",
        "Database Management Systems",
      ],
      gradient: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      id: "logo-branding",
      title: "Logo & Branding",
      image: "/ServicesImages/LogoBranding.svg",
      description:
        "We design distinctive logos and comprehensive brand identities that capture your business essence and resonate with your target audience. Our branding solutions help establish a memorable presence across all touchpoints.",
      detailText:
        "Our creative team develops unique visual identities that tell your brand story and create lasting impressions in the minds of your customers.",
      features: [
        "Logo Design",
        "Brand Identity Design",
        "Business Card Design",
        "Letterhead Design",
        "Brand Guidelines",
        "Corporate Identity",
        "Brand Strategy",
        "Visual Identity Systems",
        "Logo Redesign",
        "Brand Collateral Design",
        "Typography Design",
        "Color Palette Development",
      ],
      gradient: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      image: "/ServicesImages/GraphicDesign.svg",
      description:
        "Our graphic design services encompass everything from print design to marketing communications that leave a lasting impression. We design with meticulous attention to detail, ensuring every element supports your brand message.",
      detailText:
        "From presentation and creative to impactful visual communications, our design team brings your ideas to life with visually stunning and strategically sound design solutions.",
      features: [
        "Print Design",
        "Marketing Materials Design",
        "Brochure and Flyer Design",
        "Digital Signage",
        "Social Media Graphics",
        "Advertising Design",
        "Advanced Graphic Design",
        "Annual Report Design",
        "Branding and Identity Design",
        "Typography and Font Selection",
        "Infographic Design",
        "Presentation Design",
      ],
      gradient: "from-indigo-600 to-blue-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      image: "/ServicesImages/DigitalMarketing.svg",
      description:
        "Elevate your online presence with our comprehensive digital marketing strategies. We help businesses grow their reach, engage their audience, and drive measurable results through targeted campaigns and data-driven insights.",
      detailText:
        "Our marketing experts develop customized strategies that align with your business goals and deliver sustainable growth in the digital landscape.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Pay-Per-Click Advertising",
        "Email Marketing",
        "Influencer Marketing",
        "Conversion Rate Optimization",
        "Marketing Analytics",
        "Brand Management",
        "Online Reputation Management",
        "Marketing Automation",
        "Digital Strategy Consulting",
      ],
      gradient: "from-cyan-600 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
    },
    {
      id: "miscellaneous",
      title: "Miscellaneous Service",
      image: "/ServicesImages/MiscellaneousService.svg",
      description:
        "We offer additional specialized services to support your digital journey. Our industry experts provide consultation solutions to tackle unique challenges and meet specific business requirements.",
      detailText:
        "From specialized consulting to unique project requirements, we have the expertise to help with various digital initiatives that don't fit standard service categories.",
      features: [
        "Technical Consulting",
        "Project Discovery Services",
        "Maintenance",
        "Audit Services",
        "Third-Party API Integration",
        "Custom Integrations",
        "Performance Optimization",
        "Business Intelligence Solutions",
        "Data Migration Services",
        "Security Audits",
        "Training and Documentation",
        "Technical Support Services",
      ],
      gradient: "from-gray-600 to-slate-600",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
    },
  ];

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-slate-900 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 border-b-2 border-slate-700">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Our Services
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-Maincolor to-Secondcolor font-semibold text-sm sm:text-base max-w-lg mx-auto">
              Explore how Softivra helps you build, scale, and thrive online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-${index}`}
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="bg-slate-900 border-2 border-slate-700 p-6 sm:p-8 hover:border-Maincolor transition-all duration-500"
            >
              {/* Service Row */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Image Section - always on top on mobile */}
                <div className={`w-full lg:w-1/2 flex justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto object-contain"
                  />
                </div>

                {/* Content Section */}
                <div className={`w-full lg:w-1/2 space-y-4 text-center lg:text-left ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {service.detailText}
                  </p>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="mt-8 border-t-2 border-slate-700 pt-6">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-4xl">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center bg-slate-800 text-white px-3 py-1.5 border-2 border-slate-700 hover:border-Maincolor transition-all duration-300"
                      whileHover={{ scale: 1.04 }}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-Maincolor mr-1.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[10px] sm:text-xs font-medium text-gray-200">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-8">
        <CTASection />
      </div>
    </div>
  );
};

export default Services;
