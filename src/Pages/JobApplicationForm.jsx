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
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-slate-900 border-2 border-slate-700 max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-800 text-white p-6 border-b-2 border-slate-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold">Apply for {jobTitle}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors hover:bg-white/5 p-1.5"
            >
              <IoCloseSharp />
            </button>
          </div>
          <p className="text-gray-300 text-xs mt-1.5">
            Fill out the form below to submit your application.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 text-sm text-white placeholder-gray-600"
              placeholder="Enter your full name"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              Contact No. *
            </label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 text-sm text-white placeholder-gray-600"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 text-sm text-white placeholder-gray-600"
              placeholder="Enter your email address"
            />
          </div>

          {/* Experience Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-300">
                Total Exp. (Yrs) *
              </label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 text-sm text-white placeholder-gray-600"
                placeholder="e.g., 3 Yrs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-300">
                Relevant Exp. (Yrs) *
              </label>
              <input
                type="text"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 text-sm text-white placeholder-gray-600"
                placeholder="e.g., 2 Yrs"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
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
                <div className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 hover:bg-slate-900 transition-all text-gray-300 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-Maincolor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {formData.resume ? formData.resume.name : 'Choose File'}
                </div>
              </label>
              <span className="text-xs text-gray-400">
                {formData.resume ? 'File chosen' : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              Cover Letter / Key Skills / Portfolio *
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2.5 bg-slate-800 border-2 border-slate-700 text-sm text-white placeholder-gray-600 resize-none"
              placeholder="Key skills, portfolio link, etc..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border-2 border-slate-700 hover:bg-slate-800 text-gray-300 text-sm font-semibold transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-Maincolor hover:bg-Secondcolor text-white text-sm font-semibold transition-all cursor-pointer"
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
