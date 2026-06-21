import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const JobApplicationForm = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    totalExperience: '',
    relevantExperience: '',
    resume: null,
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prev => ({
        ...prev,
        resume: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white border-3 border-black max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-[6px_6px_0_0_#000]">
        {/* Header */}
        <div className="bg-[#ffd13b] text-black p-6 border-b-3 border-black">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight">Apply for {jobTitle}</h2>
            <button
              onClick={onClose}
              className="text-black hover:bg-white/30 text-xl cursor-pointer transition-colors p-1 border-2 border-black bg-white shadow-[1px_1px_0_0_#000]"
            >
              <IoCloseSharp className="stroke-[2px]" />
            </button>
          </div>
          <p className="text-black font-semibold text-xs mt-1.5">
            Fill out the form below to submit your application.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto bg-white text-black">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-black uppercase tracking-wider">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm text-black placeholder-gray-500 font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0_0_#000] transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-black uppercase tracking-wider">
              Contact No. *
            </label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm text-black placeholder-gray-500 font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0_0_#000] transition-all"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-black uppercase tracking-wider">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm text-black placeholder-gray-500 font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0_0_#000] transition-all"
              placeholder="Enter your email address"
            />
          </div>

          {/* Experience Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-black uppercase tracking-wider">
                Total Exp. (Yrs) *
              </label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm text-black placeholder-gray-500 font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0_0_#000] transition-all"
                placeholder="e.g., 3 Yrs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-black uppercase tracking-wider">
                Relevant Exp. (Yrs) *
              </label>
              <input
                type="text"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm text-black placeholder-gray-500 font-bold outline-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0_0_#000] transition-all"
                placeholder="e.g., 2 Yrs"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-black uppercase tracking-wider">
              Upload Resume
            </label>
            <div className="flex items-center gap-3">
              <label className="flex-1 cursor-pointer">
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <div className="w-full px-4 py-2.5 bg-white border-2 border-black hover:bg-[#ffd13b]/20 transition-all text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[2px_2px_0_0_#000]">
                  <svg className="w-4 h-4 text-black stroke-[2.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {formData.resume ? formData.resume.name : 'Choose File'}
                </div>
              </label>
              <span className="text-xs font-black text-black uppercase">
                {formData.resume ? 'File chosen' : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black text-black uppercase tracking-wider">
              Cover Letter / Key Skills / Portfolio *
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm text-black placeholder-gray-500 font-bold outline-none resize-none focus:bg-[#ffd13b]/10 focus:shadow-[2px_2px_0_0_#000] transition-all"
              placeholder="Key skills, portfolio link, etc..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-white border-2 border-black text-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] hover:bg-[#ff4a77] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0_0_#000] transition-all cursor-pointer text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-Maincolor text-black border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0_0_#000] transition-all cursor-pointer text-center"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
