// components/JobApplicationForm.js
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
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-Maincolor/30 to-Secondcolor/30 text-white p-5 border-b border-slate-800">
          <div className="flex justify-between items-center">
            <h2 className="text-base sm:text-lg font-bold">Apply for {jobTitle}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors"
            >
              <IoCloseSharp />
            </button>
          </div>
          <p className="text-blue-200/80 text-[11px] mt-1">
            Fill out the form below to submit your application.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto">
          {/* Name */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-300">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs focus:ring-1 focus:ring-Maincolor focus:border-transparent transition-colors text-white placeholder-gray-600"
              placeholder="Enter your full name"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-300">
              Contact No. *
            </label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs focus:ring-1 focus:ring-Maincolor focus:border-transparent transition-colors text-white placeholder-gray-600"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-300">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs focus:ring-1 focus:ring-Maincolor focus:border-transparent transition-colors text-white placeholder-gray-600"
              placeholder="Enter your email address"
            />
          </div>

          {/* Experience Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-300">
                Total Exp. (Yrs) *
              </label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs focus:ring-1 focus:ring-Maincolor focus:border-transparent transition-colors text-white placeholder-gray-600"
                placeholder="e.g., 3 Yrs"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-300">
                Relevant Exp. (Yrs) *
              </label>
              <input
                type="text"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs focus:ring-1 focus:ring-Maincolor focus:border-transparent transition-colors text-white placeholder-gray-600"
                placeholder="e.g., 2 Yrs"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-1">
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
                <div className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md hover:bg-slate-900 transition-colors text-gray-300 text-xs font-medium">
                  {formData.resume ? formData.resume.name : 'Choose File'}
                </div>
              </label>
              <span className="text-[10px] text-gray-400">
                {formData.resume ? 'File chosen' : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-300">
              Cover Letter / Key Skills / Portfolio *
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-xs focus:ring-1 focus:ring-Maincolor focus:border-transparent transition-colors text-white placeholder-gray-600"
              placeholder="Key skills, portfolio link, etc..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-800 hover:bg-slate-800 text-gray-300 rounded-md text-xs font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-Maincolor hover:bg-blue-600 text-white rounded-md text-xs font-semibold shadow-md transition-colors cursor-pointer"
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