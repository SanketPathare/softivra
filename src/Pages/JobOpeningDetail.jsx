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
      <div className="min-h-screen bg-[#faf6ee] flex items-center justify-center px-4">
        <div className="text-center space-y-4 bg-white border-3 border-black p-8 shadow-[4px_4px_0_0_#000]">
          <h1 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">Job Not Found</h1>
          <p className="text-xs sm:text-sm text-black/80 font-semibold">The job you're looking for doesn't exist.</p>
          <Link
            to="/job-openings"
            className="inline-block bg-[#ffd13b] text-black border-2 border-black px-4 py-2 text-xs font-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all uppercase tracking-wider"
          >
            Back to Job Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#faf6ee] pb-16">
        {/* Hero Section */}
        <section className="bg-white text-black py-20 px-4 border-b-4 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tight">Current Opening</h1>
            <p className="text-xs sm:text-sm text-black font-bold max-w-2xl mx-auto leading-relaxed">
              Join our team and be part of an innovative environment where your skills make a real impact.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-white border-3 border-black shadow-[4px_4px_0_0_#000] overflow-hidden">
            {/* Job Header */}
            <div className="bg-[#00b8a9] text-black p-8 border-b-3 border-black">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black mb-1 uppercase tracking-tight">{jobData.title}</h1>
                  <p className="text-xs sm:text-sm text-black font-bold mb-3 uppercase tracking-wider">{jobData.position}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 text-[9px] font-black bg-[#ff4a77] text-black border-2 border-black shadow-[1px_1px_0_0_#000] uppercase tracking-wider">
                      {jobData.department}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 text-[9px] font-black bg-white text-black border-2 border-black shadow-[1px_1px_0_0_#000] uppercase tracking-wider">
                      {jobData.experience}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 text-[9px] font-black bg-white text-black border-2 border-black shadow-[1px_1px_0_0_#000] uppercase tracking-wider">
                      {jobData.location}
                    </span>
                  </div>
                </div>
                <div className="sm:text-right flex flex-col gap-2">
                  <button 
                    onClick={() => setShowApplicationForm(true)}
                    className="bg-[#ffd13b] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] px-6 py-2.5 font-black text-xs transition-all cursor-pointer w-fit sm:ml-auto uppercase tracking-wider"
                  >
                    Apply Now
                  </button>
                  <p className="text-black font-semibold text-[10px] uppercase tracking-wider">Joining: {jobData.joining}</p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b-3 border-black bg-white">
              <div className="px-8">
                <nav className="flex gap-8">
                  {['details', 'process', 'requirements'].map((tab) => (
                    <button
                      key={tab}
                      className={`py-4 px-1 border-b-4 font-black text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                        activeTab === tab
                          ? 'border-black text-black'
                          : 'border-transparent text-black/60 hover:text-black hover:border-black/30'
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
            <div className="p-8 bg-white text-black">
              {activeTab === 'details' && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-xs font-black text-black uppercase tracking-wider">Job Summary</h2>
                    <div className="bg-[#faf6ee] border-2 border-black p-5 shadow-[2px_2px_0_0_#000]">
                      <p className="text-black text-xs sm:text-sm font-semibold leading-relaxed">
                        {jobData.description}
                      </p>
                    </div>
                  </section>
                  
                  <section className="space-y-3">
                    <h2 className="text-xs font-black text-black uppercase tracking-wider">Key Responsibilities</h2>
                    <div className="bg-[#faf6ee] border-2 border-black p-5 shadow-[2px_2px_0_0_#000]">
                      <ul className="space-y-3 text-black text-xs sm:text-sm font-semibold">
                        {jobData.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-black font-black mr-3 mt-0.5">•</span>
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
                  <h2 className="text-xs font-black text-black uppercase tracking-wider mb-2">Hiring Process</h2>
                  <div className="space-y-6">
                    {hiringProcess.map((step) => (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-9 h-9 bg-[#ffd13b] border-2 border-black text-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_#000]">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1 space-y-1.5">
                          <h3 className="text-sm sm:text-base font-black text-black uppercase tracking-wider">{step.title}</h3>
                          <p className="text-black/85 text-xs sm:text-sm font-semibold leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#00b8a9] border-2 border-black p-5 shadow-[2px_2px_0_0_#000]">
                    <p className="text-black text-xs sm:text-sm font-black uppercase tracking-wider">
                      Note: Joining Required: {jobData.joining.toLowerCase()}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-xs font-black text-black uppercase tracking-wider">Required Skills</h2>
                    <div className="bg-[#faf6ee] border-2 border-black p-5 shadow-[2px_2px_0_0_#000]">
                      <ul className="space-y-3 text-black text-xs sm:text-sm font-semibold">
                        {jobData.requiredSkills.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-black font-black mr-3 mt-0.5">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                  
                  <section className="space-y-3">
                    <h2 className="text-xs font-black text-black uppercase tracking-wider">Nice to Have</h2>
                    <div className="bg-[#faf6ee] border-2 border-black p-5 shadow-[2px_2px_0_0_#000]">
                      <ul className="space-y-3 text-black text-xs sm:text-sm font-semibold">
                        {jobData.niceToHave.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-black font-black mr-3 mt-0.5">•</span>
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
            <div className="bg-[#ff4a77] border-t-3 border-black p-8 text-center space-y-4 shadow-inner">
              <h3 className="text-xl font-black text-black uppercase tracking-tight">Ready to Join Our Team?</h3>
              <p className="text-black text-xs sm:text-sm font-bold leading-relaxed max-w-lg mx-auto">
                Take the next step in your career journey. Apply now and become part of our innovative team where your skills will be valued and your growth supported.
              </p>
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-[#ffd13b] text-black font-black py-3 px-8 text-xs cursor-pointer border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 uppercase tracking-widest transition-all"
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
