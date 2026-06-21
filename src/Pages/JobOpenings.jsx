import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { jobOpenings } from "../Data/jobOpeningsData";

const JobOpenings = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="min-h-screen bg-slate-800 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Current Openings
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">
            Explore and apply to positions available at Softivra.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-Maincolor mb-3">
            Find Your Fit!
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Discover opportunities that match your skills and aspirations in our
            innovative environment.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm border border-slate-700 bg-slate-900" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-xs font-semibold rounded-l-md transition-colors duration-300 cursor-pointer ${
                activeTab === "current"
                  ? "bg-Maincolor text-white"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Openings
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-xs font-semibold rounded-r-md transition-colors duration-300 cursor-pointer ${
                activeTab === "updates"
                  ? "bg-Maincolor text-white"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
              onClick={() => setActiveTab("updates")}
            >
              Stay Updated
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "current" ? (
          <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-700">
            {/* Intro Section */}
            <div className="bg-gradient-to-r from-Maincolor/30 to-Secondcolor/30 text-white p-6 border-b border-slate-700">
              <h3 className="text-lg font-bold mb-2">
                Forge a New Path!
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed">
                Our current openings offer an opportunity to be part of a
                dynamic and innovative environment where your skills and ideas
                will make a real impact. Whether you're an experienced
                professional or just starting your career, we provide a
                collaborative space for growth, learning, and creativity.
              </p>
              <p className="mt-3 font-semibold text-xs sm:text-sm text-blue-200">
                Your future starts here!
              </p>
            </div>

            {/* Job Listings */}
            <div className="p-6">
              <h3 className="text-base font-bold text-white mb-4">
                Available Positions
              </h3>
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="border border-slate-800 bg-slate-900/60 rounded-lg p-5 hover:border-slate-700 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {job.title}
                        </h4>
                        <div className="flex gap-1.5 mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-blue-400 border border-slate-700">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-blue-400 border border-slate-700">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/job-openings/${job.slug}`}
                        className="px-3.5 py-2 bg-Maincolor hover:bg-Secondcolor text-white rounded-lg transition-colors duration-300 text-xs font-semibold text-center"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
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
          <div className="bg-slate-900 rounded-xl shadow-lg p-6 sm:p-8 text-center border border-slate-700">
            <div className="max-w-xl mx-auto space-y-6">
              <h2 className="text-lg font-bold text-white">
                Stay Connected for New Positions
              </h2>
              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-800 text-left">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Not found your position? Don't worry! Stay updated on our
                  latest job openings by regularly visiting our career page or
                  following our social media.
                </p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  We're excited to potentially welcome you to our team and
                  embark on a journey of mutual success together. Thank you for
                  considering us as your next career destination!
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                  Follow us to stay connected
                </h3>
                <div className="flex justify-center space-x-4">
                  <Link
                    to="https://www.linkedin.com/company/softivra"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <Link
                    to="https://twitter.com/softivra"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/softivra"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("current")}
                  className="px-4 py-2.5 bg-Maincolor hover:bg-Secondcolor text-white rounded-lg transition-colors duration-300 font-semibold text-xs cursor-pointer"
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
