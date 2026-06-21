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
      <div className="min-h-screen bg-slate-800 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-100">Job Not Found</h1>
          <p className="text-xs sm:text-sm text-gray-300">The job you're looking for doesn't exist.</p>
          <Link
            to="/job-openings"
            className="inline-block bg-Maincolor text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-600 transition-colors"
          >
            Back to Job Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-800 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Current Opening</h1>
            <p className="text-xs sm:text-sm text-blue-100/80 max-w-lg mx-auto leading-relaxed">
              Join our team and be part of an innovative environment where your skills make a real impact.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-800">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-Maincolor/30 to-Secondcolor/30 text-white p-6 border-b border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold mb-1">{jobData.title}</h1>
                  <p className="text-xs sm:text-sm text-blue-200 mb-3">{jobData.position}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-gray-300 border border-slate-700">
                      {jobData.department}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-gray-300 border border-slate-700">
                      {jobData.experience}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-gray-300 border border-slate-700">
                      {jobData.location}
                    </span>
                  </div>
                </div>
                <div className="sm:text-right flex flex-col gap-2">
                  <button 
                    onClick={() => setShowApplicationForm(true)}
                    className="bg-Maincolor hover:bg-Secondcolor text-white px-4 py-2 rounded-lg font-semibold text-xs transition-colors duration-300 shadow-md cursor-pointer w-fit sm:ml-auto"
                  >
                    Apply Now
                  </button>
                  <p className="text-gray-400 text-[10px]">Joining: {jobData.joining}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-slate-800 bg-slate-900/60">
              <div className="px-6">
                <nav className="flex gap-6">
                  {['details', 'process', 'requirements'].map((tab) => (
                    <button
                      key={tab}
                      className={`py-3.5 px-1 border-b-2 font-semibold text-xs capitalize cursor-pointer ${
                        activeTab === tab
                          ? 'border-Maincolor text-Maincolor'
                          : 'border-transparent text-gray-400 hover:text-gray-200'
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
            <div className="p-6">
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Job Summary</h2>
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-lg p-4">
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {jobData.description}
                      </p>
                    </div>
                  </section>
                  
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Key Responsibilities</h2>
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
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
                <div className="space-y-6">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Hiring Process</h2>
                  <div className="space-y-4">
                    {hiringProcess.map((step) => (
                      <div key={step.step} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-7 h-7 bg-Maincolor/25 text-Maincolor rounded-full flex items-center justify-center font-bold text-xs">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-xs sm:text-sm font-bold text-white">{step.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4">
                    <p className="text-blue-300 text-xs font-semibold">
                      Note: Joining Required: {jobData.joining.toLowerCase()}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-6">
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Required Skills</h2>
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                        {jobData.requiredSkills.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-Maincolor mr-2">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                  
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Nice to Have</h2>
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                        {jobData.niceToHave.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
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
            <div className="bg-slate-950/40 border-t border-slate-800 p-6 text-center space-y-3">
              <h3 className="text-base font-bold text-white">Ready to Join Our Team?</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-md mx-auto">
                Take the next step in your career journey. Apply now and become part of our innovative team where your skills will be valued and your growth supported.
              </p>
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-Maincolor hover:bg-Secondcolor text-white px-5 py-2.5 rounded-lg font-semibold text-xs cursor-pointer shadow-md transition-colors"
              >
                Apply Now
              </button>
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