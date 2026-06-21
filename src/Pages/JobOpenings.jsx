import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { jobOpenings } from "../Data/jobOpeningsData";

const JobOpenings = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="min-h-screen bg-slate-800 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-Maincolor/10 via-transparent to-Secondcolor/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Current Openings
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore and apply to positions available at Softivra.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-Maincolor mb-3">
            Find Your Fit!
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Discover opportunities that match your skills and aspirations in our
            innovative environment.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-lg" role="group">
            <button
              type="button"
              className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === "current"
                  ? "bg-gradient-to-r from-Maincolor to-Secondcolor text-white shadow-lg shadow-Maincolor/20"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Openings
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === "updates"
                  ? "bg-gradient-to-r from-Maincolor to-Secondcolor text-white shadow-lg shadow-Maincolor/20"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("updates")}
            >
              Stay Updated
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "current" ? (
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden">
            {/* Intro Section */}
            <div className="bg-gradient-to-r from-Maincolor/20 via-Maincolor/10 to-transparent text-white p-8 border-b border-slate-700/50">
              <h3 className="text-xl font-bold mb-3">
                Forge a New Path!
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Our current openings offer an opportunity to be part of a
                dynamic and innovative environment where your skills and ideas
                will make a real impact. Whether you're an experienced
                professional or just starting your career, we provide a
                collaborative space for growth, learning, and creativity.
              </p>
              <p className="mt-4 font-semibold text-sm sm:text-base text-Maincolor">
                Your future starts here!
              </p>
            </div>

            {/* Job Listings */}
            <div className="p-8">
              <h3 className="text-lg font-bold text-white mb-6">
                Available Positions
              </h3>
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-Maincolor/30 transition-all duration-300 hover:shadow-lg hover:shadow-Maincolor/5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-Maincolor transition-colors">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-Maincolor/15 text-Maincolor border border-Maincolor/20">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-Maincolor/15 text-Maincolor border border-Maincolor/20">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/job-openings/${job.slug}`}
                        className="px-5 py-2.5 bg-Maincolor hover:bg-Secondcolor text-white rounded-xl transition-all duration-300 text-xs font-semibold text-center shadow-lg shadow-Maincolor/20"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-700/30">
                      <div className="grid grid-cols-2 gap-3 text-xs text-gray-400">
                        <div>
                          <span className="font-semibold text-gray-300">Post:</span>{" "}
                          {job.position}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-300">Location:</span>{" "}
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Stay Updated Section */
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-8 sm:p-10 text-center">
            <div className="max-w-xl mx-auto space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Stay Connected for New Positions
              </h2>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 text-left">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Not found your position? Don't worry! Stay updated on our
                  latest job openings by regularly visiting our career page or
                  following our social media.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We're excited to potentially welcome you to our team and
                  embark on a journey of mutual success together. Thank you for
                  considering us as your next career destination!
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Follow us to stay connected
                </h3>
                <div className="flex justify-center space-x-6">
                  <Link
                    to="https://www.linkedin.com/company/softivra"
                    target="_blank"
                    className="text-gray-400 hover:text-Maincolor transition-colors duration-300 hover:scale-110 transform"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-7 w-7" aria-hidden="true" />
                  </Link>
                  <Link
                    to="https://twitter.com/softivra"
                    target="_blank"
                    className="text-gray-400 hover:text-Maincolor transition-colors duration-300 hover:scale-110 transform"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-7 w-7" aria-hidden="true" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/softivra"
                    target="_blank"
                    className="text-gray-400 hover:text-Maincolor transition-colors duration-300 hover:scale-110 transform"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-7 w-7" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("current")}
                  className="px-6 py-3 bg-Maincolor hover:bg-Secondcolor text-white rounded-xl transition-all duration-300 font-semibold text-sm cursor-pointer shadow-lg shadow-Maincolor/20"
                >
                  Visit Our Career Page
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobOpenings;
