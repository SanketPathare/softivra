import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { jobOpenings } from "../Data/jobOpeningsData";

const JobOpenings = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="min-h-screen bg-slate-800 pb-6 sm:pb-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <div
            id="hero"
            data-animate
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Current Openings
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-Maincolor mb-4">
            Find Your Fit!
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover opportunities that match your skills and aspirations in our
            innovative environment
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium rounded-l-lg transition-colors duration-300 ${
                activeTab === "current"
                  ? "bg-Maincolor text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Openings
            </button>
            <button
              type="button"
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium rounded-r-lg transition-colors duration-300 ${
                activeTab === "updates"
                  ? "bg-Maincolor text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("updates")}
            >
              Stay Updated
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "current" ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-l from-Maincolor to-Secondcolor  text-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Forge a New Path!
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-3xl">
                Our current openings offer an opportunity to be part of a
                dynamic and innovative environment where your skills and ideas
                will make a real impact. Whether you're an experienced
                professional or just starting your career, we provide a
                collaborative space for growth, learning, and creativity.
              </p>
              <p className="mt-4 font-medium text-sm sm:text-base">
                Your future starts here!
              </p>
            </div>

            {/* Job Listings */}
            <div className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
                Available Positions
              </h3>
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-base sm:text-lg font-bold text-gray-800">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/job-openings/${job.slug}`}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium text-center"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Post:</span>{" "}
                          {job.position}
                        </div>
                        <div>
                          <span className="font-medium">Location:</span>{" "}
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
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Stay Connected for New Positions
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-8">
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  Not found your position? Don't worry! Stay updated on our
                  latest job openings by regularly visiting our career page or
                  following our social media.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  We're excited to potentially welcome you to our team and
                  embark on a journey of mutual success together. Thank you for
                  considering us as your next career destination!
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                  Follow us to stay connected
                </h3>
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  <Link
                    to="https://www.linkedin.com/company/nextdigit-software"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    to="https://twitter.com/Nextdigit_Sw"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/Nextdigit-Software/"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm sm:text-base">
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
