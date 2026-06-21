import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { jobOpenings } from "../Data/jobOpeningsData";

const JobOpenings = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="min-h-screen bg-[#faf6ee] pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Current Openings
          </h1>
          <p className="text-black text-xs sm:text-sm font-bold max-w-xl mx-auto leading-relaxed">
            Explore and apply to positions available at Softivra.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 uppercase tracking-tight">
            Find Your Fit!
          </h2>
          <p className="text-xs sm:text-sm text-black/85 font-semibold max-w-xl mx-auto leading-relaxed">
            Discover opportunities that match your skills and aspirations in our
            innovative environment.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white border-3 border-black shadow-[3px_3px_0px_0px_#000]" role="group">
            <button
              type="button"
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "current"
                  ? "bg-[#ffd13b] text-black border-2 border-black shadow-[1px_1px_0px_0px_#000]"
                  : "text-black hover:bg-[#ffd13b]/30 border-2 border-transparent"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Openings
            </button>
            <button
              type="button"
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "updates"
                  ? "bg-[#ffd13b] text-black border-2 border-black shadow-[1px_1px_0px_0px_#000]"
                  : "text-black hover:bg-[#ffd13b]/30 border-2 border-transparent"
              }`}
              onClick={() => setActiveTab("updates")}
            >
              Stay Updated
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "current" ? (
          <div className="bg-white border-3 border-black shadow-[4px_4px_0_0_#000] overflow-hidden">
            {/* Intro Section */}
            <div className="bg-[#00b8a9] text-black p-8 border-b-3 border-black">
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight">
                Forge a New Path!
              </h3>
              <p className="text-black font-semibold text-xs sm:text-sm leading-relaxed max-w-2xl">
                Our current openings offer an opportunity to be part of a
                dynamic and innovative environment where your skills and ideas
                will make a real impact. Whether you're an experienced
                professional or just starting your career, we provide a
                collaborative space for growth, learning, and creativity.
              </p>
              <p className="mt-4 font-black text-xs sm:text-sm uppercase tracking-wider bg-white border-2 border-black inline-block px-3 py-1 shadow-[2px_2px_0px_0px_#000]">
                Your future starts here!
              </p>
            </div>

            {/* Job Listings */}
            <div className="p-8 bg-white">
              <h3 className="text-lg font-black text-black mb-6 uppercase tracking-wider">
                Available Positions
              </h3>
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="group bg-[#faf6ee] border-2 border-black p-6 shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-black group-hover:text-Maincolor transition-colors uppercase tracking-tight">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="inline-flex items-center px-3 py-1 text-[9px] font-black bg-[#ff4a77] text-black border-2 border-black shadow-[1px_1px_0_0_#000] uppercase tracking-wider">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 text-[9px] font-black bg-white text-black border-2 border-black shadow-[1px_1px_0_0_#000] uppercase tracking-wider">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/job-openings/${job.slug}`}
                        className="px-5 py-2.5 bg-[#ffd13b] text-black font-black uppercase text-xs cursor-pointer border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor transition-all text-center"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="mt-5 pt-4 border-t-2 border-black">
                      <div className="grid grid-cols-2 gap-3 text-xs text-black font-semibold">
                        <div>
                          <span className="font-black text-black uppercase tracking-wider text-[10px]">Post:</span>{" "}
                          {job.position}
                        </div>
                        <div>
                          <span className="font-black text-black uppercase tracking-wider text-[10px]">Location:</span>{" "}
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
          <div className="bg-white border-3 border-black p-8 sm:p-10 text-center shadow-[4px_4px_0_0_#000]">
            <div className="max-w-xl mx-auto space-y-8">
              <h2 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                Stay Connected for New Positions
              </h2>
              <div className="bg-[#faf6ee] border-2 border-black p-6 text-left">
                <p className="text-black text-xs sm:text-sm font-semibold leading-relaxed mb-4">
                  Not found your position? Don't worry! Stay updated on our
                  latest job openings by regularly visiting our career page or
                  following our social media.
                </p>
                <p className="text-black text-xs sm:text-sm font-semibold leading-relaxed">
                  We're excited to potentially welcome you to our team and
                  embark on a journey of mutual success together. Thank you for
                  considering us as your next career destination!
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-black text-black uppercase tracking-wider">
                  Follow us to stay connected
                </h3>
                <div className="flex justify-center space-x-6">
                  <Link
                    to="https://www.linkedin.com/company/softivra"
                    target="_blank"
                    className="text-black hover:bg-[#ff4a77] hover:scale-105 transition-all p-3 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="https://twitter.com/softivra"
                    target="_blank"
                    className="text-black hover:bg-[#ff4a77] hover:scale-105 transition-all p-3 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/softivra"
                    target="_blank"
                    className="text-black hover:bg-[#ff4a77] hover:scale-105 transition-all p-3 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("current")}
                  className="px-6 py-3 bg-[#ffd13b] text-black font-black text-xs uppercase tracking-wider cursor-pointer border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] transition-all"
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
