import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobOpenings, hiringProcess } from '../Data/jobOpeningsData';
import JobApplicationForm from '../Pages/JobApplicationForm';

const JobOpeningDetail = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const { slug } = useParams();

  // Find the job by slug
  const jobData = jobOpenings.find(job => job.slug === slug);

  // If job not found, show error
  if (!jobData) {
    return (
      <div className="min-h-screen bg-slate-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-4">Job Not Found</h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">The job you're looking for doesn't exist.</p>
          <Link
            to="/job-openings"
            className="bg-Maincolor text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-colors"
          >
            Back to Job Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white py-10 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Current Opening</h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                Join our team and be part of an innovative environment where your skills make a real impact
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-Maincolor to-Secondcolor text-white p-4 sm:p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{jobData.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-3 sm:mb-4">{jobData.position}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-500/30 text-white backdrop-blur-sm">
                      {jobData.department}
                    </span>
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-500/30 text-white backdrop-blur-sm">
                      {jobData.experience}
                    </span>
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-500/30 text-white backdrop-blur-sm">
                      {jobData.location}
                    </span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 lg:mt-0 lg:text-right">
                  <button 
                    onClick={() => setShowApplicationForm(true)}
                    className="bg-white text-Maincolor px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-50 transition-colors duration-300 shadow-lg cursor-pointer"
                  >
                    Apply Now
                  </button>
                  <p className="text-blue-100 mt-2 text-xs sm:text-sm">Joining: {jobData.joining}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                <nav className="flex flex-wrap gap-4 sm:gap-8">
                  {['details', 'process', 'requirements'].map((tab) => (
                    <button
                      key={tab}
                      className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm capitalize ${
                        activeTab === tab
                          ? 'border-Maincolor text-Maincolor'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === 'process' ? 'Hiring Process' : tab === 'requirements' ? 'Requirements' : 'Job Details'}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
              {activeTab === 'details' && (
                <div className="space-y-6 sm:space-y-8">
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Job Summary</h2>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {jobData.description}
                      </p>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Key Responsibilities</h2>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        {jobData.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-Maincolor mr-2">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-6 sm:space-y-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Hiring Process</h2>
                  <div className="space-y-4 sm:space-y-6">
                    {hiringProcess.map((step) => (
                      <div key={step.step} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-Maincolor rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 sm:mt-6">
                    <p className="text-yellow-800 font-medium text-sm sm:text-base">
                      Note: Joining Required: {jobData.joining.toLowerCase()}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-6 sm:space-y-8">
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Required Skills</h2>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        {jobData.requiredSkills.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-Maincolor mr-2">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Nice to Have</h2>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        {jobData.niceToHave.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              )}
            </div>

            {/* Apply Now Section */}
            <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-6 md:p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Ready to Join Our Team?</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
                  Take the next step in your career journey. Apply now and become part of our innovative team where your skills will be valued and your growth supported.
                </p>
                <button 
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-Maincolor text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg cursor-pointer"
                >
                  Apply Now
                </button>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">We're excited to potentially welcome you to our team!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <JobApplicationForm 
          jobTitle={jobData.title}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </>
  );
};

export default JobOpeningDetail;