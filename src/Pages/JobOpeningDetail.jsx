import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobOpenings, hiringProcess } from '../Data/jobOpeningsData';
import JobApplicationForm from '../Pages/JobApplicationForm';

const JobOpeningDetail = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const { slug } = useParams();

  const jobData = jobOpenings.find(job => job.slug === slug);

  if (!jobData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-100">Job Not Found</h1>
          <p className="text-xs sm:text-sm text-gray-300">The job you're looking for doesn't exist.</p>
          <Link
            to="/job-openings"
            className="inline-block bg-Maincolor text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-Secondcolor transition-colors"
          >
            Back to Job Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-900 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-Maincolor/10 via-transparent to-Secondcolor/5 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Current Opening</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join our team and be part of an innovative environment where your skills make a real impact.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-Maincolor/20 via-Maincolor/10 to-transparent text-white p-8 border-b border-slate-700/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold mb-1">{jobData.title}</h1>
                  <p className="text-sm sm:text-base text-gray-300 mb-3">{jobData.position}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-Maincolor/15 text-Maincolor border border-Maincolor/20">
                      {jobData.department}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-slate-800/80 text-gray-300 border border-slate-700/50">
                      {jobData.experience}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-slate-800/80 text-gray-300 border border-slate-700/50">
                      {jobData.location}
                    </span>
                  </div>
                </div>
                <div className="sm:text-right flex flex-col gap-2">
                  <button 
                    onClick={() => setShowApplicationForm(true)}
                    className="bg-Maincolor hover:bg-Secondcolor text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-Maincolor/20 cursor-pointer w-fit sm:ml-auto"
                  >
                    Apply Now
                  </button>
                  <p className="text-gray-400 text-[10px]">Joining: {jobData.joining}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-slate-700/50 bg-slate-900/40">
              <div className="px-8">
                <nav className="flex gap-8">
                  {['details', 'process', 'requirements'].map((tab) => (
                    <button
                      key={tab}
                      className={`py-4 px-1 border-b-2 font-semibold text-sm capitalize cursor-pointer transition-all duration-300 ${
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
            <div className="p-8">
              {activeTab === 'details' && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Job Summary</h2>
                    <div className="bg-slate-950/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {jobData.description}
                      </p>
                    </div>
                  </section>
                  
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Key Responsibilities</h2>
                    <div className="bg-slate-950/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5">
                      <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                        {jobData.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-Maincolor mr-3 mt-0.5">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-8">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Hiring Process</h2>
                  <div className="space-y-6">
                    {hiringProcess.map((step) => (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-9 h-9 bg-gradient-to-br from-Maincolor to-Secondcolor text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-Maincolor/30">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1 space-y-1.5">
                          <h3 className="text-sm sm:text-base font-bold text-white">{step.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-Maincolor/10 backdrop-blur-sm border border-Maincolor/20 rounded-xl p-5">
                    <p className="text-Maincolor text-sm font-semibold">
                      Note: Joining Required: {jobData.joining.toLowerCase()}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Required Skills</h2>
                    <div className="bg-slate-950/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5">
                      <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                        {jobData.requiredSkills.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-Maincolor mr-3 mt-0.5">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                  
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Nice to Have</h2>
                    <div className="bg-slate-950/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5">
                      <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                        {jobData.niceToHave.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-3 mt-0.5">•</span>
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
            <div className="bg-gradient-to-r from-Maincolor/20 via-Maincolor/10 to-transparent border-t border-slate-700/50 p-8 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">Ready to Join Our Team?</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-lg mx-auto">
                Take the next step in your career journey. Apply now and become part of our innovative team where your skills will be valued and your growth supported.
              </p>
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-Maincolor hover:bg-Secondcolor text-white px-8 py-3 rounded-xl font-semibold text-sm cursor-pointer shadow-lg shadow-Maincolor/20 transition-all"
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
