import React, { useState, useEffect } from 'react';
import CTASection from '../components/HomeComponents/CTASection';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'web-design',
      title: 'Web Design',
      image: '/ServicesImages/webdesgin.svg',
      description: 'Our Web Design service transforms your online presence with visually compelling, user-friendly websites. From modern layouts to user experience optimization, ensuring your site not only looks outstanding but converts visitors into customers.',
      detailText: 'From concept to launch, our team crafts every detail with precision. We believe a custom website should make the perfect impression, getting your brand noticed online and converting visitors into loyal customers.',
      features: [
        'Responsive Web Design',
        'Landing Page Design',
        'Blog Design',
        'Portfolio & Branding Design',
        'SEO Optimised Design',
        'Branding & Marketing',
        'User Experience Design',
        'Website Redesign Design',
        'WordPress Web Design',
        'Web Design Consultation',
        'Website Audit Report & Site Map',
        'Website Wireframing & Prototyping'
      ],
      gradient: 'from-blue-600 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      image: '/ServicesImages/webdev.svg',
      description: 'Our Web development services bring concepts to life through custom web solutions. We leverage the latest technologies and best practices to build robust, scalable, and secure web applications that meet your specific business needs and exceed user expectations.',
      detailText: 'Whether you need a simple website or a complex web application, our development team has the expertise to deliver exceptional results that drive your business forward.',
      features: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Development',
        'React Development',
        'Node.js Development',
        'Database Development',
        'API Development',
        'E-commerce Development',
        'CMS Development',
        'Web App Development',
        'Progressive Web Apps',
        'Performance Optimization'
      ],
      gradient: 'from-green-600 to-teal-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50'
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      image: '/ServicesImages/software.svg',
      description: 'Our custom software services offer business solutions designed to meet the unique requirements of your organization. We build tailor-made applications that streamline your workflows, enhance productivity, and give your business a competitive edge.',
      detailText: 'From initial concept to development and ongoing support, we ensure your business receives a fully customized solution that evolves with your needs.',
      features: [
        'Desktop App Development',
        'Enterprise Application Development',
        'Mobile Application Development',
        'Web Application Development',
        'CRM Development',
        'ERP Development',
        'Business Process Automation',
        'Cloud Solutions',
        'System Integration',
        'Legacy System Modernization',
        'API Development',
        'Database Management Systems'
      ],
      gradient: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      id: 'logo-branding',
      title: 'Logo & Branding',
      image: '/ServicesImages/logobrand.svg',
      description: 'We design distinctive logos and comprehensive brand identities that capture your business essence and resonate with your target audience. Our branding solutions help establish a memorable presence across all touchpoints.',
      detailText: 'Our creative team develops unique visual identities that tell your brand story and create lasting impressions in the minds of your customers.',
      features: [
        'Logo Design',
        'Brand Identity Design',
        'Business Card Design',
        'Letterhead Design',
        'Brand Guidelines',
        'Corporate Identity',
        'Brand Strategy',
        'Visual Identity Systems',
        'Logo Redesign',
        'Brand Collateral Design',
        'Typography Design',
        'Color Palette Development'
      ],
      gradient: 'from-orange-600 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      image: '/ServicesImages/graphicdesign.svg',
      description: 'Our graphic design services encompass everything from print design to marketing communications that leave a lasting impression. We design with meticulous attention to detail, ensuring every element supports your brand message.',
      detailText: 'From presentation and creative to impactful visual communications, our design team brings your ideas to life with visually stunning and strategically sound design solutions.',
      features: [
        'Print Design',
        'Marketing Materials Design',
        'Brochure and Flyer Design',
        'Digital Signage',
        'Social Media Graphics',
        'Advertising Design',
        'Advanced Graphic Design',
        'Annual Report Design',
        'Branding and Identity Design',
        'Typography and Font Selection',
        'Infographic Design',
        'Presentation Design'
      ],
      gradient: 'from-indigo-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      image: '/ServicesImages/digitalmarketing.svg',
      description: 'Elevate your online presence with our comprehensive digital marketing strategies. We help businesses grow their reach, engage their audience, and drive measurable results through targeted campaigns and data-driven insights.',
      detailText: 'Our marketing experts develop customized strategies that align with your business goals and deliver sustainable growth in the digital landscape.',
      features: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Pay-Per-Click Advertising',
        'Email Marketing',
        'Influencer Marketing',
        'Conversion Rate Optimization',
        'Marketing Analytics',
        'Brand Management',
        'Online Reputation Management',
        'Marketing Automation',
        'Digital Strategy Consulting'
      ],
      gradient: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50'
    },
    {
      id: 'miscellaneous',
      title: 'Miscellaneous Service',
      image: '/public/ServicesImages/miscellaneousservice.svg',
      description: 'We offer additional specialized services to support your digital journey. Our industry experts provide consultation solutions to tackle unique challenges and meet specific business requirements.',
      detailText: 'From specialized consulting to unique project requirements, we have the expertise to help with various digital initiatives that don\'t fit standard service categories.',
      features: [
        'Technical Consulting',
        'Project Discovery Services',
        'Maintenance',
        'Audit Services',
        'Third-Party API Integration',
        'Custom Integrations',
        'Performance Optimization',
        'Business Intelligence Solutions',
        'Data Migration Services',
        'Security Audits',
        'Training and Documentation',
        'Technical Support Services'
      ],
      gradient: 'from-gray-600 to-slate-600',
      bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20  px-4 sm:px-6 lg:px-8 inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="hero"
            data-animate
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white
            ">
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services Designed for You Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Services Designed for You
          </h2>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-30">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Service Image */}
              <div 
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} transform transition-all duration-1000 ${
                  isVisible[`service-${index}`] ? 'translate-x-0 opacity-100' : `${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'} opacity-0`
                }`}
                id={`service-${index}`}
                data-animate
              >
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={`${service.title} illustration`} 
                    className="w-full h-100 object-fill rounded-lg border border-white/20 bg-white"
                  />
                </div>
              </div>

              {/* Service Content */}
              <div 
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} transform transition-all duration-1000 delay-200 ${
                  isVisible[`service-${index}`] ? 'translate-x-0 opacity-100' : `${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'} opacity-0`
                }`}
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-base text-blue-200 mb-8 leading-relaxed">
                  {service.detailText}
                </p>

                {/* Service Features */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="bg-slate-800/50 backdrop-blur-sm border border-blue-300/30 rounded-lg px-3 py-2 text-center hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <span className="text-xs text-blue-100 font-medium text-center">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection/>
    </div>
  );
};

export default Services;